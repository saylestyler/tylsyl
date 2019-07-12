---
date: '2019-07-09T12:52:05-04:00'
title: 'ps aux || lsof '
description: '&&* lsof?'
---
today in Not-Knowing, I realized I didn't know what the difference was today when asked about `ps aux`

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562691024/isoby52atakw0dgzi6dh.jpg)

# context

Nel learned about the [zoom security vulnerability](https://medium.com/@jonathan.leitschuh/zoom-zero-day-4-million-webcams-maybe-an-rce-just-get-them-to-visit-your-website-ac75c83f4ef5), ran `lsof -i :19241` and saw some localHosting going on... 

# output 

after (confirming that I too didn't have any zoom processes running) running a server on port 8000, this is the output of `lsof -i :8000`:

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562692355/fqqbwuci372vvdku3rgz.jpg)

and here's `ps aux | grep 8000`

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562692482/cwuxwmqfnwqlukjxrrey.jpg)

aka finds nothing but the `rg` searching for... nothing aka turns out they are not the same! :hehe: 

# `lsof` 

(files opened by processes)

focuses on the _port_ a process is running on

```
  Lists open files and the corresponding processes.
  Note: Root privileges (or sudo) is required to list files opened by others.

  - Find the processes that have a given file open:
    lsof path/to/file

  - Find the process that opened a local internet port:
    lsof -i :port

  - Only output the process ID (PID):
    lsof -t path/to/file

  - List files opened by the given user:
    lsof -u username

  - List files opened by the given command or process:
    lsof -c process_or_command_name

  - List files opened by a specific process, given its PID:
    lsof -p PID

  - List open files in a directory:
    lsof +D path/to/directory
```

# `ps` 

quoting [this gist](https://gist.github.com/Integralist/a49df746e2bd30bff047#ps): "An open file may be a regular file, a directory, a block special file, a character special file, an executing text reference, a library, a stream or a network file (Internet socket, NFS file or UNIX domain socket)" 

```
  Information about running processes.

  - List all running processes:
    ps aux

  - List all running processes including the full command string:
    ps auxww

  - Search for a process that matches a string:
    ps aux | grep string

  - List all processes of the current user in extra full format:
    ps --user $(id -u) -F

  - List all processes of the current user as a tree:
    ps --user $(id -u) f

  - Get the parent pid of a process:
    ps -o ppid= -p pid
```

I used to use lsof / ps to find postgres / dev servers etc. until I got annoyed with the two step-ness of it, and now use: 

# kill <tab> 

in zsh this will do this: 

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562693144/p8ygi9fvukpapzulbbh9.jpg)

# `npx kill-port <number>`

guess what this does :~) 

fun fact, this pkg uses a funny pkg called `get-them-args` 

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562693386/j28t4otwgb18cwnj4s8m.jpg)

and "under the hood", ofc, it simply uses `lsof | grep | awk | xargs kill`

![](https://res.cloudinary.com/cloudimgts/image/upload/v1562693483/yyherfnqnqtgustbdeef.jpg)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgyOTcxNjA0OV19
-->