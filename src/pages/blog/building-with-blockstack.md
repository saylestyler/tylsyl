---
templateKey: blog-post
title: building with blockstack
date: '2019-11-11T16:04:47-05:00'
description: Just how easy is it to build a blockchain-y app?
tags:
  - blockstack
  - blockchain
  - distributed-systems
---
# mission 

Blockstack is interested in getting developers _and consumers_ interested in blockchain-driven technologies. It does this by lowering the barrier of entry to blockchain technologies. 

The platform has two principles 

> - First, create backend services that allow decentralized applications to be both performant and scalable. 
> - Second, provide simple, familiar development interfaces to blockchain technology.

Developers have created a bunch (hundreds) of apps that are what you see after login, speaking of which: 

# onboarding 

Honestly B has one of the nicer onboardings I've come across. You register a unique id, a password token & a phrase in case you lose any of the above.

# using an app

Takes a few seconds in the case of [dcrypt-vault](https://vault.dcrypt.app/) a google-drive/dropbox-like service. 

When you start using apps in this ecosystem you're presented with an O-auth-y request for permissions: 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573506635/bh7i1ijkdetizm8jm9sc.png)

After using my id, I uploaded an image to my now hyper-mega-encrypted drive et voilà

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573506786/xbxkfdwnj2p2iz1e9pio.png)

# btw

The site and app subpages are gorgina: 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573506951/ckdmrn2jekxtcr4hnftw.png)

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573506877/ie1kaowrzydv43ouvs3d.png)

# building an app

> Using Blockstack’s technology you can start building immediately on the blockchain with the knowledge you have today.

I followed along the "zero to Dapp" tut, thither here are some highlights. 

> A DApp uses blockchain technology for the authentication and data storage components of an application’s platform.

What's [blockchain](https://en.wikipedia.org/wiki/Blockchain)

> Dapps eligible for Application mining must: 
> - Implement Blockstack authentication
> - Invite registration and use by the general public

Not sure what Application Mining is, but those are the reqs, and the app we're building apparently meets them.

I also might get a t-shirt. 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573508126/y48olss3ophic8rnlefm.png)

> the blockstack browser app is a Dapp

We're going to be using <browser.blockstack.org> and <hub.blockstack.org> which is the Gaia storage hub (a service w/ no pub interface). 

One clones a react-based node project here.They do a good job of making sure new devs are on track, repeatedly reminding how to `pwd` and snippets like these: 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573508668/b4qn0oyd3fn9ql95pad6.png)

I think I read somewhere that it may take a second to validate my id <smoky_topaz.id.blockstack>, so I'm going to check back/finish this when this error no longer occurs: 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573508783/uel7fj2gxjibqbznhivi.png)

From there though, it walks you through the Dapp's structure, showing you how to allow other users on Blockstack to add their own animals to kingdoms in your pet (lit & fig) Dapp,

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573508958/veyvbmqjjl6ldxe5rvjm.png)

and then how to deploy it with my first love, [netlify](https://www.netlify.com/). 

# summary 

All in all, is very cool but feels "new" and they could use some moderation (which I'm assuming is coming with more quantity) in the apps available which had some major kinks.

I'm now going to steal their css for this blogs dark mode. 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573509122/azqkgovl61olvmg2zwkq.png)

`(~:` 
