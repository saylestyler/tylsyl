---
templateKey: blog-post
title: 'rust: gourd boggling'
date: '2019-11-18T18:21:36-05:00'
description: getting my mind blown by rust's cargo
tags:
  - rust
  - cargo
---
# ok wowwie 

I was writing some companion notes as I was following along with _the_ rust book. I found myself appending screenshot after progressively wowwier screenshot as I played around with `cargo doc --open`

# bg

cargo = rust's build tool & package manager

gives you the following commands

`cargo build`
`cargo test`
`cargo doc` (!)
`cargo run` (compiles & runs in one step)
`cargo publish` (publishes to <crates.io>)

for global installation of fmt & linting tools:

`rustup component add rustfmt
; rustup component add clippy`

# where yours truli was woo'd

in the lil starter project I used the `rand` random number generator

```rs
use rand::Rng

// etc 

let secret_num = rand::thread_rng()
  .gen_range(1, 101);
```

`cargo doc --open` will build docs provided by all ur local dependencies; if u are using `rand::Rng`, you can call the former and click on `rand` to find out more functionality contained in the crate

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574118796/pxjrzj0zyfsiyjcknawo.png)

then clicking on the methods will reveal trait implementations, methods, etc.

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574118796/pxjrzj0zyfsiyjcknawo.png)

wowwie :ok: !

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574119022/qrxav3mdks8oe65pcmcz.png)

_p.s. there are gorgeous examples for each method :scream:_

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574119235/b7xnrmspxf35pq5qhv2j.png)

/ omg it will even show you the source code for any method :gagged: 

# summary 

With the help of `cargo doc` I quickly was able to peek at other methods available to a pkg, see example uses, see the source code for each, and add them to my own project.

The only docs I've seen that are this good/practically usable are Haskell's (jk!! :smiling:) [Ramda's](https://ramdajs.com/docs/). The diff? Cargo generates them on demand for locally installed crates. 

:wow:
