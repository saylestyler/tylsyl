#!/bin/bash
shopt -s extglob
isint(){
    case $1 in
        ?([-+])+([0-9]) )
            return 0;;
        *) return 1;;
            esac
}

# Parse ~/.ssh/known_hosts and ~/.ssh/config to find hosts
for x in `sed -e 's/[, ].*//' ~/.ssh/known_hosts; awk '/^Host [^*?]+$/{print $2}' ~/.ssh/config`; do

    # Don’t override commands
    type "${x}" > /dev/null 2>&1 && continue

    # Remove the domainname
    y=${x%%.*}
    # you don't want IP addresses for aliases, trust me.
    isint $y && continue

    # If it's a short-name, move on
    #z=${x##*.}
    #[[  "${z}" == 'edu' ||  "${z}" == 'com' || "${z}" == 'net' ]] || continue
    # So the above is commented out because you'd be surprised at how much
    # you rely on your search path. You should pipe the output of this script to
    # sort and your fqdn's will override your shorts.
    echo alias "${x}"="ssh $x"

    if [[ "$y" != "$x" ]]; then
        if ! type $y > /dev/null 2>&1; then
        echo     alias $y=”ssh $x”
        fi
    fi
done
