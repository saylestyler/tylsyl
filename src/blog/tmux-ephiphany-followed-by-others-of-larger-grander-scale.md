---
type: blog
blog: true
title: 'tmux  ephiphany followed by others of larger, grander scale'
date: 2019-03-02 12:00:00
excerpt: 'enter, the process'
tags:
  - tmux
  - osx
---
behold: 

```
❯ tmux ls
cloudinaryDaemon: 1 windows (created Sun Jul 14 08:21:35 2019)
npmRunDevelop: 1 windows (created Sun Jul 14 08:50:40 2019)
```

today, post-ssh-ing into a machine & running `history` and seeing `tmux` peppered throughout, ‘twas then I knew that twas time to spiral / *actually, fully* read the man pages once n for all!!!1! 

tmux is NOT a ~terminal multiplexer~ (it is) but look no further for a more opaque tech(nical) def(inition) successfully precluding any reading on many-o-times

my def, post nirvana reached being 

<div class="green">
  tmux is a terminal session manager (... with other cool things such as windowing tricks n stuff)
</div>

sessions allow u to do stuff like, start a session, run `./start_dev_server`
followed by `ctrl-b d` which spits one out of tmux session, but: _*doesn’t stop said process from continuing to run, log to stdout, whatever else it does, forever, EvEn iF yOu ClOSe YouR tErMInal_

this led to a pseudo-epiph (the shock and awe of the process still remaining on application close) for (literally just a few) seconds until I realized "ofc <said_process> is just a background process/daemon/like-countless-other-processes-processes now..." 

cue elucidation of prob tmux was solving (in this case): starting a process in the background

but, ofc, there's `&` as in `./start_dev_server &` which, later can be recalled from `jobs`

epiph re tmux ~> epiph re Processes

but honestly just use tmux so that you don't have to figure out the syntax of piping the output of ur `<said_process>` to `> /dev/null &2`

completely unrelated, i discovered this moments later lmfao

![](https://res.cloudinary.com/cloudimgts/image/upload/v1563140383/ovhnvm8skiobhegsuip4.png)

tldr if u open a multiple tabs/windows in $TERM, stop n do them in tmux
