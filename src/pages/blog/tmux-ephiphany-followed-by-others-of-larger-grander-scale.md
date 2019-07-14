---
templateKey: blog-post
title: 'tmux  ephiphany followed by others of larger, grander scale'
date: '2019-07-14T14:20:27-04:00'
description: 'enter, the process'
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

earlier while, ssh-ing (:), i typed history and saw `tmux` peppered about in the results and knew that it was time i spiral / *actually, fully* read the man pages once n for all!!!1! 

tmux is NOT a ~terminal multiplexer~, or, that is the one of the more opaquer definitions for a technology which has successfully precluded me reading on many-o-times

<div class="green">
  tmux is a terminal session manager (... with other cool things such as windowing tricks n stuff)
</div>

sessions allow u to do stuff like, say, go into a directory, run `./start_dev_server`, followed by `ctrl-b d` which has you spit out of tmux session, but thither its kept the process `./start_dev_server` running, EvEn iF yOu ClOSe YouR tErMInal 

this led me a pseudoephiphany (the shock and awe of the process still remaining on application close) for (literally just a few) seconds until I realized "ofc <said_process> is just a background process/daemon/like-countless-other-processes-process now..." 

thinking of what i _actually_ thought tmux was useful for: starting a process in the background, but, ofc, there's `&` as in `./start_dev_server &` which, later can be recalled from `jobs`

epiph re tmux ~> epiph re Processes

but honestly just use tmux so that you don't have to figure out the syntax of piping the output of ur `<said_process>` to `> /dev/null &2`

completely unrelated, i discovered this moments later lmfao

![](https://res.cloudinary.com/cloudimgts/image/upload/v1563140383/ovhnvm8skiobhegsuip4.png)
