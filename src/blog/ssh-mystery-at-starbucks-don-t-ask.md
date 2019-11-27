---
type: blog
blog: true
title: ssh mystery at starbucks (don't ask)
date: 2019-11-02 12:00:00
excerpt: A dump of what happened when I couldn't ssh into a machine at a starbucks.
tags:
    - ssh
    - networking
---
I needed to see why an email script on an ec2 instance wasn't sending *~urgently~* (I didn't have any reception (tHaNks SpRiNt) otherwise I'd've hotspott'd and I couldn't go home) alas, Starbucks.

After ordering an unspeakable drink I sat betwixt the author of the next great American novella & a veritable hyena-y group of high-schoolers. 

```
ssh: connect to host ec2-69-666-69-666.compute-1.amazonaws.com port 22: Connection refused
```

# Things I did

1. Checked `sshd` was running. 

This = the ssh server process which listens to incoming connections which r using the ssh protocol. This lil binary is located at `/usr/sbin/sshd` & starts on boot. 

It enables things like tunneling, term connections, encryption. A cute way to test this that literally boggled my mind at first is `ssh localhost`: your prompt changes, the files stay the same, bc.. they are. Explaining localhost (loopback/local... host) is kind of like writing a recursive function and je refuse. 

Anyway, that worked.

2. Wrung my hands. 

& sipped my abomination. 

3. Went down a rabbit hole of _What's A Port Even_.

_d. a communication endpoint (not helpful)_

_d. in an OS, a port is a [Logical Construct](https://plato.stanford.edu/entries/logical-construction/) (don't click that link if you want to avoid spiraling down your own rabbit hole of truly titillating content re: Logical Constructions) (<plato.stanford.edu> is an amazing site).. starting over._

_d. in an OS, a port is a designator for a specific process or a type of network service (not bad!)_

4. googled "port 22 connection refused Starbucks wifi"

voilà: a rabid fan base of sys admin-dom _and_ Starbucks! 

The ultimate culprit: [Google, Google Fiber](https://blog.joshnotes.com/google-fiber-starbucks/). 

Found out I am also 5 years late to Breaking This Story lol, as the article above was published in 2014 :-P. 

Any who, it turns out that ISPs (Google in this case) can block traffic on specific ports. The gall. 

[Here's a gorg Qurora post](https://www.quora.com/How-do-I-know-which-ports-are-blocked-by-my-ISP-Are-there-any-utilities-out-there-which-I-can-use-to-find-out) about how to find which ports are available, [nmap](https://nmap.org/) seeming to be #1. They also have a siq design: 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574459421/defo3of0x1pb4fj0j3qb.png)

5. Last: I asked the more philosophical question of Why

# But why

At the time of writing (10 mins after it was posted, and curiously upvoted immediately) there is a lone comment:

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574459561/q9xqrp1aq4dh14xoxwob.png)

Why not!

# update: 

A lively discussion has begun on my question, w/ two epic -1 answers (hopefully the downvoter(s) are busy writing rebuttals / The Answer): 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574464680/q4zhxiflsnqutk1xotax.png)
