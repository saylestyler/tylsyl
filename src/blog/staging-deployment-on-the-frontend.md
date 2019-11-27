---
type: blog
blog: true
title: 'staging deployment on the frontend '
date: 2019-09-02 12:00:00
excerpt: how we deployed staging via bash script at a previous job
tags:
    - deployment
    - devops
    - ssh
---
Doing phone-screens I've been asked what a deployment has looked like at previous jobs I've been at, thus this post.

# frontend (staging)

to deploy staging for the frontend, a bash script would be ran, broken down here:

```bash
#!/bin/bash
set -e
```

some general setup

```bash
function staging-tunnel {
  ssh -o StrictHostKeyChecking=no ec2-user@${STAGING_JUMP_IP:?} -L ${REMOTE_ADDRESS} -M -S ssh-socket -fN -4
}
```

Tunneling = [ssh tunneling](https://en.wikipedia.org/wiki/Tunneling_protocol); `ssh -o` from the `man ssh`:

```
-o option

Can be used to give options in the format used in the configura-
tion file. This is useful for specifying options for which there
is no separate command-line flag. For full details of the
options listed below, and their possible values, see
ssh_config(5).
```

`StrictHostKeyChecking=no`, again from the man page (last line)

```
ssh automatically maintains and checks a database containing identifica-
tion for all hosts it has ever been used with. Host keys are stored in
~/.ssh/known_hosts in the user's home directory. Additionally, the file
/usr/local/etc/ssh/ssh_known_hosts is automatically checked for known
hosts. Any new hosts are automatically added to the user's file. If a
host's identification ever changes, ssh warns about this and disables
password authentication to prevent server spoofing or man-in-the-middle
attacks, which could otherwise be used to circumvent the encryption. The
StrictHostKeyChecking option can be used to control logins to machines
whose host key is not known or has changed.
```

`ec2-user@${STAGING_JUMP_IP:?}` this bit is just using an env var with the jump ip address since all of the servers live in a(n) (AWS) VPC behind a proxy server (NGINX).
`-L ${REMOTE_ADDRESS} -M -S ssh-socket -fN -4`, cue the man page:

```
Specifies that connections to the given TCP port or Unix socket
on the local (client) host are to be forwarded to the given host
and port, or Unix socket, on the remote side. This works by
allocating a socket to listen to either a TCP port on the local
side, optionally bound to the specified bind_address, or to a
Unix socket. Whenever a connection is made to the local port or
socket, the connection is forwarded over the secure channel, and
a connection is made to either host port hostport, or the Unix
socket remote_socket, from the remote machine.
Port forwardings can also be specified in the configuration file.
Only the superuser can forward privileged ports. IPv6 addresses
can be specified by enclosing the address in square brackets.
```

this next function is just responsible for exiting the tunnel post deployment:

```bash
function exit-staging-tunnel {
ssh -S ssh-socket -O exit ec2-user@${STAGING_JUMP_IP:?}
}
```

voilà, meat and potatoes of the script:

```bash
function deploy-staging {
  ips=$1

  for ip in ${ips[*]}; do
    staging-tunnel $ip
    pushd dist
    scp -o StrictHostKeyChecking=no -${STAGING_DIST_PORT} -r . ubuntu@localhost:/usr/share/yr-site-dir/static
    popd
    exit-staging-tunnel
  done
}
```

for all the ips specified as args to the script, tunnel, then, from the excellent CLI `tldr`:

```bash
$ tldr pushd

pushd

Place a directory on a stack so it can be accessed later.
See also popd to switch back to original directory.

- Switch to directory and push it on the stack:
pushd directory
- Switch first and second directories on the stack:
pushd
- Rotate stack by making the 5th element the top of the stack:
pushd +4
```

where `dist` is where the build artefacts live, which then copy everything recursively using [scp](https://en.wikipedia.org/wiki/Secure_copy) to the remote directory you want to your static files to live @, `popd` to remove a directory added to the dir stack via, you guessed it, `pushd`, and then call `exit-staging-tunnel`.

Almost finally, run your build command (we used grunt): `grunt build:staging`

& finally, call the M&P function:

```
porter_ip=(${STAGING_PORTER_IP})
deploy-staging $porter_ip
```

and you've deployed your frontend to staging! :~)

## adding circle.ci 

in your `circle.yml` file, first add any tests you want to run:

```yaml
version: 2
jobs:
  test:
    docker:
      - image: circleci/node:8.10-browsers
    steps:
      - checkout
      - restore_cache:
          name: Restore Yarn Package Cache
          keys:
            - yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}
      - run:
          name: Install Dependencies
          command: yarn install
      - save_cache:
          name: Save Yarn Package Cache
          key: yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}
          paths:
            - node_modules/
      - run:
          name: Run tests
          command: PATH=$(npm bin):$PATH grunt test
```

the name keys will show up in the circle.ci gui as headers with their outputs below. 

Then, write out the steps that you'd execute normally to run the script above: 

```yaml
  deploy-staging:
    docker:
      - image: circleci/node:8.10
    steps:
      - checkout
      - restore_cache:
          name: Restore Yarn Package Cache
          keys:
            - yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}
      - run:
          name: Build Staging
          command: PATH=$(npm bin):$PATH grunt build:staging
      - run:
          name: Deploy Staging
          command: PATH=$(npm bin):$PATH ./scripts/deployStaging.sh

workflows:
  version: 2
  build-and-deploy:
    jobs:
      - test
      - deploy-staging:
          requires:
            - test
          filters:
            branches:
              only:
                - dev
                - master
```

et mash'allah: whenever you push to dev or master, your staging env is built and deployed automagically.

_backend/production for a separate post_

- - -

here's a pic i just found that a fellow developer drew me week 1 of learning abt my job's AWS infrastructure... eek 

![aws](https://res.cloudinary.com/cloudimgts/image/upload/v1565330133/xrocyhlzt4yww5qd6qvz.png)
