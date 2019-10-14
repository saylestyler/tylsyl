---
templateKey: blog-post
title: nix shell cli dump
date: '2018-09-01T13:25:31-04:00'
description: (z)shhhh
tags:
  - programming
  - zsh
  - shell
  - unix
  - cli
  - osx
---
<!--# TOC, todo -->

# (z)(fish)(tc)(ba)shells

## bash

#### bash-it... Da∫ Unbloaded

my .zshrc was getting to be > 1,3 million lines on avg. 
after days of configuration and variable tweaking
and then realizing that debugging was _l'impossible_ so 
tried bash-it (along w/ `xonsh`, which was v weird(?) tbd which i'll use)

tl;dr zsh feature Bloat, config hell

#### bash-it plugins

built-in-it! you don't even gotta go on github
and organize by most stars

example _bash-it browser_  opens a browser with the raw html displayed

shell
echo "<h1>hi mom!</h1>" | browser

# opens browser w/ html rendered on static page

````
    #### bash-it autocompletion

    another suspiciously seamless-ly integrated feature, w/ no 
    `compinit autoload -UZ)(R##F) -9; init` à la `.zshrc`

    you select which autocompletions you'd like, w/ option for `all` and a warning
    that it might slow things down, which, it didn't :~_)

    #### bash-it search

    ```shell
    bash-it search bundle
          aliases:  bundler
      completions:  bundler
````

<https://github.com/Bash-it/bash-it>

## xonsh

## mailing urself a file

```shell
mail -a myscript.sh -s "copy of the myscript" tyler@g.com < /dev/null
```

## xargs

# find all file name ending with .pdf and remove them

```shell
find -name *.pdf | xargs rm -rf
```

# GNU.org

## misc awk programs

<https://www.gnu.org/software/gawk/manual/gawk.html#Miscellaneous-Programs>

example:

_11.3.1 Finding Duplicated Words in a Document_
A common error when writing large amounts of prose is to accidentally duplicate words. Typically you will see this in text as something like “the the program does the following…” When the text is online, often the duplicated words occur at the end of one line and the beginning of another, making them very difficult to spot.

This program, dupword.awk, scans through a file one line at a time and looks for adjacent occurrences of the same word. It also saves the last word on a line (in the variable prev) for comparison with the first word on the next line.

The first two statements make sure that the line is all lowercase, so that, for example, “The” and “the” compare equal to each other. The next statement replaces nonalphanumeric and nonwhitespace characters with spaces, so that punctuation does not affect the comparison either. The characters are replaced with spaces so that formatting controls don’t create nonsense words (e.g., the Texinfo ‘@code{NF}’ becomes ‘codeNF’ if punctuation is simply deleted). The record is then resplit into fields, yielding just the actual words on the line, and ensuring that there are no empty fields.

If there are no fields left after removing all the punctuation, the current record is skipped. Otherwise, the program loops through each word, comparing it to the previous one:

```awk
 # dupword.awk --- find duplicate words in text
{
    $0 = tolower($0)
    gsub(/[^[:alnum:][:blank:]]/, " ");
    $0 = $0         # re-split
    if (NF == 0)
        next
    if ($1 == prev)
        printf("%s:%d: duplicate %s\n",
            FILENAME, FNR, $1)
    for (i = 2; i <= NF; i++)
        if ($i == $(i-1))
            printf("%s:%d: duplicate %s\n",
                FILENAME, FNR, $i)
    prev = $NF
}
```

my first awk = an night cron job that emailed db stats in a beauty of a lil table:

```shell
sendEmail() {
  local userCount="$(psql -d ${ConnString:?} -c $'\copy (select count(*) from users where created_at > now() - interval \'1 day\') to stdout' |
    | awk '{print "<h1>signups</h1><p>there were " $0 " signups today</p>"
  ;}')"
}
```

## postgres server logs

```shell
tail /usr/local/var/postgres/server.log

// sample output:

FATAL:  lock file "postmaster.pid" already exists
HINT:  Is another postmaster (PID 90574) running in data directory "/usr/local/var/postgres"?
```

## postgres config

```shell
--describe-config

This option dumps out the server's internal configuration
variables, descriptions, and defaults in tab-delimited COPY format.
```

## keyboard maestro

wadda program!

<https://www.keyboardmaestro.com/>

## `defaults`

mine that've been altered:

```
# imsg
defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticQuoteSubstitutionEnabled" -bool false

sudo defaults write /Library/Preferences/com.apple.loginwindow AdminHostInfo HostName

# --
defaults write NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false

defaults write NSGlobalDomain NSScrollAnimationEnabled -bool false

# choose where u want ur SSs to go
defaults write com.apple.screencapture location /Users/tyler/kk/static/img/ & killall SystemUIServer

defaults write -g WebAutomaticTextReplacementEnabled -bool true
```

### apropos, whatis

hatis  searches  a  set  of database files containing short descriptions of system commands for
keywords and displays the result on the standard output.  Only complete word  matches  are  displayed.

`$ apropos ssh`

```shell
git-shell(1)             - Restricted login shell for Git-only SSH access
CURLINFO_APPCONNECT_TIME(3) - get the time until the SSL/SSH handshake is completed
CURLOPT_SSH_AUTH_TYPES(3) - set desired auth types for SFTP and SCP
CURLOPT_SSH_HOST_PUBLIC_KEY_MD5(3) - checksum of SSH server public key
CURLOPT_SSH_KEYDATA(3)   - pointer to pass to the SSH key callback
CURLOPT_SSH_KEYFUNCTION(3) - callback for known host matching logic
CURLOPT_SSH_KNOWNHOSTS(3) - file name holding the SSH known hosts
CURLOPT_SSH_PRIVATE_KEYFILE(3) - set private key file for SSH auth
CURLOPT_SSH_PUBLIC_KEYFILE(3) - set public key file for SSH auth
Net::DNS::RR::SSHFP(3pm) - DNS SSHFP resource record
Tcl_NewObj(3tcl), Tcl_DuplicateObj(3tcl), Tcl_IncrRefCount(3tcl), Tcl_DecrRefCount(3tcl), Tcl_IsShared(3tcl), Tcl_InvalidateStringRep(3tcl) - manipulate Tcl objects
crosshair(n)             - Crosshairs for Tk canvas
glIsShader(3G)           - Determines if a name corresponds to a shader object
ssh(1)                   - OpenSSH SSH client (remote login program)
ssh-add(1)               - adds private key identities to the authentication agent
ssh-agent(1)             - authentication agent
ssh-copy-id(1)           - use locally available keys to authorise logins on a remote machine
ssh-keychain(8), ssh-keychain.dylib(8) - smartcard/keychain support library
ssh-keygen(1)            - authentication key generation, management and conversion
ssh-keyscan(1)           - gather ssh public keys
ssh-keysign(8)           - ssh helper program for host-based authentication
ssh-pkcs11-helper(8)     - ssh-agent helper program for PKCS#11 support
ssh_config(5)            - OpenSSH SSH client configuration files
sshd(8)                  - OpenSSH SSH daemon
sshd_config(5)           - OpenSSH SSH daemon configuration file
upsshutdown(8)           - UPS emergency low power shutdown script
```

### cat /var/log/system.log

get system log info

### cat /var/log/system.log | grep cron

get system log info re: cron jobs

### prune

`sudo prune`

<!-- what it does-->

### agedu

`agedu -s ~/examples/`

then

`agedu -w ~/examples/`

cool reading about the data-structure bhind it :~)

<https://www.chiark.greenend.org.uk/~sgtatham/agedu/tree.html>

### last

get info about logins

### sudo dmesg | less

cool :~0

## dir layout

## perl packages

```shell
perl -MCPAN -e shell

// then:

install URI::Escape

// <C-c>
```

## defaults read SafariCloudHistoryPushAgent

use `defaults domains` to list them, and `defaults read D` to read them

## ln \~/.vimrc \~/dot-files/vimrc

sick of having 4 diff config files on 4 diff computers?

# iterm2 tings

## changes profiles

```shell
it2prof() {
  echo -e "\033]50;SetProfile=$1\a"
};
```

[src](https://coderwall.com/p/s-2_nw/change-iterm2-color-profile-from-the-cli)

## homebrew src

another way to check out src code of clus is to go into

`/usr/local/opt/`

then, e.g.

`ack/bin/ack` = a 138k file with the disclaimer that this file is generated and to go to
the git repo to see the src (<https://github.com/beyondgrep/ack2>), but alas:

````pl
    #!/usr/bin/env perl
    #
    # This file, ack, is generated code.
    # Please DO NOT EDIT or send patches for it.
    #
    # Please take a look at the source from
    # https://github.com/beyondgrep/ack2
    # and submit patches against the individual files
    # that build ack.
    #

    package main;

    use strict;
    use warnings;
    our $VERSION = '2.24'; # Check https://beyondgrep.com/ for updates

    use 5.008008;
    use Getopt::Long 2.38 ();
    use Carp 1.04 ();

    use File::Spec ();


    # XXX Don't make this so brute force
    # See also: https://github.com/beyondgrep/ack2/issues/89

    our $opt_after_context;
    our $opt_before_context;
    our $opt_output;
    our $opt_print0;
    our $opt_color;
    our $opt_heading;
    our $opt_show_filename;
    our $opt_regex;
    our $opt_break;
    our $opt_count;
    our $opt_v;
    our $opt_m;
    our $opt_g;
    our $opt_f;
    our $opt_lines;
    our $opt_L;
    our $opt_l;
    our $opt_passthru;
    our $opt_column;

    # Flag if we need any context tracking.
    our $is_tracking_context;

    # These are all our globals.

    MAIN: {
        $App::Ack::orig_program_name = $0;
        $0 = join(' ', 'ack', $0);
        if ( $App::Ack::VERSION ne $main::VERSION ) {
            App::Ack::die( "Program/library version mismatch\n\t$0 is $main::VERSION\n\t$INC{'App/Ack.pm'} is $App::Ack::VERSION" );
        }

        # Do preliminary arg checking;
        my $env_is_usable = 1;
        for my $arg ( @ARGV ) {
            last if ( $arg eq '--' );

            # Get the --thpppt, --bar, --cathy checking out of the way.
            $arg =~ /^--th[pt]+t+$/ and App::Ack::thpppt($arg);
            $arg eq '--bar'         and App::Ack::ackbar();
            $arg eq '--cathy'       and App::Ack::cathy();

            # See if we want to ignore the environment. (Don't tell Al Gore.)
            $arg eq '--env'         and $env_is_usable = 1;
            $arg eq '--noenv'       and $env_is_usable = 0;
        }

        if ( !$env_is_usable ) {
            my @keys = ( 'ACKRC', grep { /^ACK_/ } keys %ENV );
            delete @ENV{@keys};
        }
        load_colors();

        Getopt::Long::Configure('default', 'no_auto_help', 'no_auto_version');
        Getopt::Long::Configure('pass_through', 'no_auto_abbrev');
        Getopt::Long::GetOptions(
            'help'       => sub { App::Ack::show_help(); exit; },
            'version'    => sub { App::Ack::print_version_statement(); exit; },
            'man'        => sub { App::Ack::show_man(); exit; },
        );
        Getopt::Long::Configure('default', 'no_auto_help', 'no_auto_version');

        if ( !@ARGV ) {
            App::Ack::show_help();
            exit 1;
        }

        main();
    }
    ```shell
    it2prof() {
      echo -e "\033]50;SetProfile=$1\a"
    }
````

## cli notetaking

```shell
function n {
  echo "${*}" >> ~/kk/notes;
};
```

## cmd click to edit the file

## `function n { echo "${\*}" >> ~/notes; echo "added" };`

```shell
$ n "does this work amazing!"
$ cat ~/notes
$ does this work amazing!
```

> Under "Semantic History", choose "Run coprocess..". In the text field, put:
>
> `echo vim \1 +\2`

## amaze ref

<http://samrowe.com/wordpress/advancing-in-the-bash-shell/>

## sudo !!

execute last command with sudo

## vim !$

open vim w/ the last bit of the last command

```shell
grep -i function src/cms/cms.js         rvm:ruby-2.4.1
function addElement () {
  script.innerHTML = `!function(){"use strict //etc
function launchCML () {
    insertHandler: function (data) {
 * @param  {Function} fn Callback function
var ready = function (fn) {
  if (typeof fn !== 'function') return
ready(function () {

vi $!
```

## !-3

do whatever was 3 commands ago

## `cp /all/these/files/*`

```shell
bash$ cp /home/bozo/current_work/junk/* .

Copy all the "junk" files to $PWD.
```

## opensource.apple.com/source

<opensource.apple.com/source>

here's the src of `cron`

<https://opensource.apple.com/source/cron/cron-35/crontab/crontab.c.auto.html>

## beware of quotes

<https://www.gnu.org/software/bash/manual/bashref.html#Escape-Character>

3.1.2.2 Single Quotes
Enclosing characters in single quotes (‘'’) preserves the literal value of each character within the quotes. A single quote may not occur between single quotes, even when preceded by a backslash.

## vared PATH

edit ur path w/ zsh

## mail a file to yrself

```shell
$ mail -a day.sh -s "script" tylers@vfiles.com < /dev/null
```

## minify a dir of images

```shell
imagemin img/* --out-dir=minified
```

## recursively own dir

```shell
sudo chown -R $(whoami) /usr/local/example
```

## find files with the prefix brew

```shell
la $(brew --prefix)/Cellar/node_modules
```

## poking around

found the SafariCloudHistoryPushAgent

```shell
man SafariCloudHistoryPushAgent

SAFARICLOUDHISTROYPUSH... BSD System Manager's ManualSAFARICLOUDHISTROYPUSH...

NAME
     SafariCloudHistoryPushAgent -- Safari Cloud History Push Agent

DESCRIPTION
     SafariCloudHistoryPushAgent is the system launch agent that listens for changes to
     Safari history from other devices.

     There are no configuration options to SafariCloudHistoryPushAgent, and users should
     not run SafariCloudHistoryPushAgent manually.

                              September 18, 2018
```

## default $PATH, languages, etc.

here are some of the defaults on a guest admin user I created:

```shell
$ ruby --version
ruby 2.3.7p456 (2018-03-28 revision 63024) [universal.x86_64-darwin17]

$ python --version
Python 2.7.15

$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/X11/bin:/Applications/Postgres.app/Contents/Versions/latest/bin
```

# ZSH

## .zshrc

### set default editors

```shell
export EDITOR="vim"
export GIT_EDITOR="vim"
export VISUAL="gvim"
```

### set prompt

```shell
setopt PROMPT_SUBST

export PROMPT="%B%(?..[%?] )%b%F{red}%M %D{%Y%b%d %H:%M:%S}>%f "
export RPROMPT="%F{green}%~%f"
```

### zsh autocompletion

to see how krazi good it is, type `/u/l/b<tab>` which will complete to `/usr/local/bin`

on running brew update i noticed these caveats:

```shell
==> Upgrading zsh-completions
==> Downloading https://github.com/zsh-users/zsh-completions/archive/0.28.0.tar.gz
==> Downloading from https://codeload.github.com/zsh-users/zsh-completions/tar.gz/0.28.0
######################################################################## 100.0%
==> Caveats
To activate these completions, add the following to your .zshrc:

  fpath=(/usr/local/share/zsh-completions $fpath)

You may also need to force rebuild `zcompdump`:

  rm -f ~/.zcompdump; compinit

Additionally, if you receive "zsh compinit: insecure directories" warnings when attempting
to load these completions, you may need to run this:

  chmod go-w '/usr/local/share'
```

i also see this a lot:

```shell
zsh completions have been installed to:
  /usr/local/share/zsh/site-functions
```

```shell
zmodload zsh/complist
autoload -Uz compinit
compinit
```

and not a clue what it does, tho i know it's related to autocompl

also, when i `cat .zcompdump` i see:

```shell
autoload -Uz _brew _brew_cask _brew_services _carthage _cheat
      ETC
            _zsh _zsh-mime-handler _zsocket _zstyle _ztodo \
autoload -Uz +X _call_program
```

### `zsh-autocompletions`, `compinit`, `zcompdump` &c.

`man zsh`

```shell
 zsh          Zsh overview (this section)
       zshroadmap   Informal introduction to the manual
       zshmisc      Anything not fitting into the other sections
       zshexpn      Zsh command and parameter expansion
       zshparam     Zsh parameters
       zshoptions   Zsh options
       zshbuiltins  Zsh built-in functions
       zshzle       Zsh command line editing
       zshcompwid   Zsh completion widgets
       zshcompsys   Zsh completion system
       zshcompctl   Zsh completion control
       zshmodules   Zsh loadable modules
       zshtcpsys    Zsh built-in TCP functions
       zshzftpsys   Zsh built-in FTP client
       zshcontrib   Additional zsh functions and utilities
       zshall       Meta-man page containing all of the above
```

## homebrew

for a great explanation of "keg-only"

<https://github.com/Homebrew/homebrew-core/issues/11091#issuecomment-286641024>

from the trouble shooting docs, re: permissions

"if you're unsure what to do, run

```shell
cd /usr/local \
sudo chown -R $(whoami) bin etc include lib sbin share var opt Cellar Caskroom Frameworks`
```

### zsh

check for all plainfiles:

```shell
% l *(.)
```

### PATH

PATH and path both set the search path for commands. These two variables are equivalent, except that one is a string and one is an array. If the user modifies PATH, the shell changes path as well, and vice versa.

```shell
% PATH=/bin:/usr/bin:/tmp:.
% echo $path
/bin /usr/bin /tmp .
% path=( /usr/bin . /usr/local/bin /usr/ucb )
% echo $PATH
/usr/bin:.:/usr/local/bin:/usr/ucb
```

## setopt

from: http://zsh.sourceforge.net/Intro/intro_16.html#SEC16

to see which options can be set, do `setopt <tab>`

### autocd

`setopt autocd`

now u can do

```shell
cd
workspaces/ (cd into workspaces)
```

<div class="yellow">
but only if it's a parent or child dir of cwd
</div>

### globdots

GLOBDOTS lets files beginning with a . be matched without explicitly specifying the dot.

`$ ls -d *x*`

### system_profiler -detailLevel mini

get info about machine

```shell
system_profiler -detailLevel mini

# output:

Software:

    System Software Overview:

      System Version: macOS 10.13.6 (17G65)
      Kernel Version: Darwin 17.7.0
      Boot Volume: Untitled
      Boot Mode: Normal
      Computer Name: iMac (3)
      User Name: tyler (tyler)
      Secure Virtual Memory: Enabled
      System Integrity Protection: Disabled
      Time since boot: 9 days 18:30
```

### 

# cite about-plugin

about-plugin 'render command line output in your browser'

function browser() {
    about 'pipe html to a browser'
    example '$ echo "<h1>hi mom!</h1>" | browser'
    example '$ ron -5 man/rip.5.ron | browser'
    group 'browser'

```
if [ -t 0 ]; then
    if [ -n "$1" ]; then
        open $1
    else
        reference browser
    fi

else
    f="/tmp/browser.$RANDOM.html"
    cat /dev/stdin > $f
    open $f
fi
```

}

```

see <https://gist.github.com/318247>

```
function wmate() {
    about 'pipe hot spicy interwebs into textmate and cleanup!'
    example '$ wmate google.com'
    group 'browser'

if [ -t 0 ]; then
    if [ -n "$1" ]; then
        wget -qO- $1 | /usr/bin/mateTIDY=`/usr/bin/osascript << EOT
tell application "TextMate"
  activate
end tell application "System Events"
  tell process "TextMate"
    tell menu bar 1
      tell menu bar item "Bundles"
        tell menu "Bundles"
          tell menu item "HTML"
            tell menu "HTML"
              click menu item "Tidy"
            end tell
          end tell
        end tell
      end tell
    end tell
  end tell
end tell
EOT

if [ -t 0 ]; then
    if [ -n "$1" ]; then
        wget -qO- $1 | browser
    else
        reference raw
    fi
fi
}
```

## finding things 

```bash
ag -i -o $* 

find . node_modules 
```

## keyboard maestro

wadda program!

<https://www.keyboardmaestro.com/>

## `defaults`

mine that've been altered:

```
# imsg
defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticQuoteSubstitutionEnabled" -bool false

sudo defaults write /Library/Preferences/com.apple.loginwindow AdminHostInfo HostName

# --
defaults write NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false

defaults write NSGlobalDomain NSScrollAnimationEnabled -bool false

# choose where u want ur SSs to go
defaults write com.apple.screencapture location /Users/tyler/kk/static/img/ & killall SystemUIServer

defaults write -g WebAutomaticTextReplacementEnabled -bool true
```

### apropos, whatis

hatis  searches  a  set  of database files containing short descriptions of system commands for
keywords and displays the result on the standard output.  Only complete word  matches  are  displayed.

`$ apropos ssh`

```shell
git-shell(1)             - Restricted login shell for Git-only SSH access
CURLINFO_APPCONNECT_TIME(3) - get the time until the SSL/SSH handshake is completed
CURLOPT_SSH_AUTH_TYPES(3) - set desired auth types for SFTP and SCP
CURLOPT_SSH_HOST_PUBLIC_KEY_MD5(3) - checksum of SSH server public key
CURLOPT_SSH_KEYDATA(3)   - pointer to pass to the SSH key callback
CURLOPT_SSH_KEYFUNCTION(3) - callback for known host matching logic
CURLOPT_SSH_KNOWNHOSTS(3) - file name holding the SSH known hosts
CURLOPT_SSH_PRIVATE_KEYFILE(3) - set private key file for SSH auth
CURLOPT_SSH_PUBLIC_KEYFILE(3) - set public key file for SSH auth
Net::DNS::RR::SSHFP(3pm) - DNS SSHFP resource record
Tcl_NewObj(3tcl), Tcl_DuplicateObj(3tcl), Tcl_IncrRefCount(3tcl), Tcl_DecrRefCount(3tcl), Tcl_IsShared(3tcl), Tcl_InvalidateStringRep(3tcl) - manipulate Tcl objects
crosshair(n)             - Crosshairs for Tk canvas
glIsShader(3G)           - Determines if a name corresponds to a shader object
ssh(1)                   - OpenSSH SSH client (remote login program)
ssh-add(1)               - adds private key identities to the authentication agent
ssh-agent(1)             - authentication agent
ssh-copy-id(1)           - use locally available keys to authorise logins on a remote machine
ssh-keychain(8), ssh-keychain.dylib(8) - smartcard/keychain support library
ssh-keygen(1)            - authentication key generation, management and conversion
ssh-keyscan(1)           - gather ssh public keys
ssh-keysign(8)           - ssh helper program for host-based authentication
ssh-pkcs11-helper(8)     - ssh-agent helper program for PKCS#11 support
ssh_config(5)            - OpenSSH SSH client configuration files
sshd(8)                  - OpenSSH SSH daemon
sshd_config(5)           - OpenSSH SSH daemon configuration file
upsshutdown(8)           - UPS emergency low power shutdown script
```

### cat /var/log/system.log

get system log info

### cat /var/log/system.log | grep cron

get system log info re: cron jobs

### prune

`sudo prune`

<!-- what it does-->

### agedu

`agedu -s ~/examples/`

then

`agedu -w ~/examples/`

cool reading about the data-structure bhind it :~)

<https://www.chiark.greenend.org.uk/~sgtatham/agedu/tree.html>

### last

get info about logins

### sudo dmesg | less

cool :~0

```
/usr/local/Homebrew/bin
```

```shell
#!/bin/bash
set +o posix
# Fail fast with concise message when cwd does not exist
if ! [[ -d "$PWD" ]]; then
echo "Error: The current working directory doesn't exist, cannot proceed." >&2
exit 1
fi
quiet_cd() {
cd "$@" >/dev/null || return
}
symlink_target_directory() {
local target target_dirname
target="$(readlink "$1")"
target_dirname="$(dirname "$target")"
local directory="$2"
quiet_cd "$directory" && quiet_cd "$target_dirname" && pwd -P
}
BREW_FILE_DIRECTORY="$(quiet_cd "${0%/*}/" && pwd -P)"
HOMEBREW_BREW_FILE="${BREW_FILE_DIRECTORY%/}/${0##*/}"
HOMEBREW_PREFIX="${HOMEBREW_BREW_FILE%/*/*}"
# Default to / prefix if unset or the bin/brew file.
if [[ -z "$HOMEBREW_PREFIX" || "$HOMEBREW_PREFIX" = "$HOMEBREW_BREW_FILE" ]]
then
HOMEBREW_PREFIX="/"
fi
HOMEBREW_REPOSITORY="$HOMEBREW_PREFIX"
# Resolve the bin/brew symlink to find Homebrew's repository
if [[ -L "$HOMEBREW_BREW_FILE" ]]
then
BREW_FILE_DIRECTORY="$(symlink_target_directory "$HOMEBREW_BREW_FILE" "$BREW_FILE_DIRECTORY")"
HOMEBREW_REPOSITORY="${BREW_FILE_DIRECTORY%/*}"
fi
# Try to find a /usr/local HOMEBREW_PREFIX where possible (for bottles)
if [[ -L "/usr/local/bin/brew" ]]
then
USR_LOCAL_BREW_FILE_DIRECTORY="$(symlink_target_directory "/usr/local/bin/brew" "/usr/local/bin")"
USR_LOCAL_HOMEBREW_REPOSITORY="${USR_LOCAL_BREW_FILE_DIRECTORY%/*}"
if [[ "$HOMEBREW_REPOSITORY" = "$USR_LOCAL_HOMEBREW_REPOSITORY" ]]
then
HOMEBREW_PREFIX="/usr/local"
fi
fi
HOMEBREW_LIBRARY="$HOMEBREW_REPOSITORY/Library"
# Whitelist and copy to HOMEBREW_* all variables previously mentioned in
# manpage or used elsewhere by Homebrew.
for VAR in AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY BINTRAY_USER BINTRAY_KEY \
BROWSER EDITOR GIT NO_COLOR PATH VISUAL
do
# Skip if variable value is empty.
[[ -z "${!VAR}" ]] && continue
VAR_NEW="HOMEBREW_${VAR}"
# Skip if existing HOMEBREW_* variable is set.
[[ -n "${!VAR_NEW}" ]] && continue
export "$VAR_NEW"="${!VAR}"
done
# test-bot does environment filtering itself
if [[ -z "$HOMEBREW_NO_ENV_FILTERING" && "$1" != "test-bot" ]]
then
PATH="/usr/bin:/bin:/usr/sbin:/sbin"
FILTERED_ENV=()
# Filter all but the specific variables.
for VAR in HOME SHELL PATH TERM COLUMNS LOGNAME USER CI TRAVIS SSH_AUTH_SOCK SUDO_ASKPASS \
http_proxy https_proxy ftp_proxy no_proxy all_proxy HTTPS_PROXY FTP_PROXY ALL_PROXY \
"${!HOMEBREW_@}" "${!TRAVIS_@}"
do
# Skip if variable value is empty.
[[ -z "${!VAR}" ]] && continue
FILTERED_ENV+=( "${VAR}=${!VAR}" )
done
exec /usr/bin/env -i "${FILTERED_ENV[@]}" /bin/bash "$HOMEBREW_LIBRARY/Homebrew/brew.sh" "$@"
else
# Don't need shellcheck to follow this `source`.
# shellcheck disable=SC1090
source "$HOMEBREW_LIBRARY/Homebrew/brew.sh"
fi
```
