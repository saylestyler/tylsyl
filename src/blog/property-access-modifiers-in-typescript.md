---
title: "property access modifiers in typescript "
date: 2021-06-05T01:00:56.439Z
excerpt: "#private"
tags: typescript
blog: true
---
I recently got [Typescript in 50 Lessons](https://typescript-book.com/) and thought I'd share a section. 

Typescript allows property access modifiers, aka you can say what can and can't be accessed on a class from The Outside. 

```ts
class Article { 
  public title: string
  private price: number 

  constructor(title: string, price: number) { 
    this.title = title
    this.price = price
  }
}

const article = new Article('Ulysses', 39)
console.log(article.price) // error 
```

The last line will error with the msg: 

> Property 'price' is private and only accessible within class 'Article'. (2341) 

because of that private prefix in the class declaration. Cool! ([here](https://github.com/Microsoft/TypeScript/issues/2341) is a titillating github thread on this topic.)

This has been a feature of TS for a while, and now JS has it's own new bizarre imo syntax: 

```ts
class Article { 
  #price: number

  constructor(price: number) { 
    this.#price = price 
  }
}
```

#cool 
