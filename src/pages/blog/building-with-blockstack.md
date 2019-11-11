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

<div class="green">
<p>
• First, create backend services that allow decentralized applications to be both performant and scalable. 
</p>
<p>
• Second, provide simple, familiar development interfaces to blockchain technology.
</p>
</div>

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

I followed along the "zero to Dapp" tut, thither I found some select quotes: 

> A DApp uses blockchain technology for the authentication and data storage components of an application’s platform.

What's [blockchain](https://en.wikipedia.org/wiki/Blockchain)

> Dapps eligible for Application mining must: 
> - Implement Blockstack authentication
> - Invite registration and use by the general public

Not sure what Application Mining is, but those are the reqs, and the app we're building apparently meets them.

I also might get a t-shirt. 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1573508126/y48olss3ophic8rnlefm.png)

> the blockstack browser app is a Dapp

We're going to be using <browser.blockstack.org> and <hub.blockstack.org> which is the Gaia storage hub (a service w/ no pub interface)
