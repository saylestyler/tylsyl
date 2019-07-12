---
templateKey: blog-post
title: CLI quick info tools compared
date: '2018-08-23T21:06:38-04:00'
description: 'tldr: tldr... '
tags:
  - shell
  - cli
  - tips
---
# `howdoi -a javascript class`

muy better than `tldr`, `bro` & close to `curl cheat.sh/js`

```
[tyler@workmb ~ ]$ howdoi -a javascript class

★ Answer from https://stackoverflow.com/questions/387707/
what-techniques-can-be-used-to-define-a-class-in-javascript-and-what-are-their ★
Here's the way to do it without using any external libraries:

// Define a class like this
function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
Person.prototype.speak = function(){
    alert("Howdy, my name is" + this.name);
};

// Instantiate new objects with 'new'
var person = new Person("Bob", "M");

// Invoke methods like this
person.speak(); // alerts "Howdy, my name is Bob"

Now the real answer is a whole lot more complex than that. For instance, there is no such thing as classes in JavaScript. JavaScript uses a prototype-based inheritance scheme.
In addition, there are numerous popular JavaScript libraries that have their own style of approximating class-like functionality in JavaScript. You'll want to check out at least Prototype and jQuery.
Deciding which of these is the "best" is a great way to start a holy war on Stack Overflow. If you're embarking on a larger JavaScript-heavy project, it's definitely worth learning a popular library and doing it their way. I'm a Prototype guy, but Stack Overflow seems to lean towards jQuery.
As far as there being only "one way to do it", without any dependencies on external libraries, the way I wrote is pretty much it.
```

# `curl cheat.sh/js/classes`

```javascript
// $ curl cheat.sh/js/classes
/*
 * oop - JavaScript Classes
 *
 * what about this :
 */

var Foo = (function() {
    // "private" variables
    var _bar;

    // constructor
    function Foo() {};

    // add the methods to the prototype so that all of the
    // Foo instances can access the private static
    Foo.prototype.getBar = function() {
        return _bar;
    };
    Foo.prototype.setBar = function(bar) {
        _bar = bar;
    };

    return Foo;
})();

/*
 * And now we have instantiation, encapsulation and inheritance.
 * But, there still is a problem. The private variable is static because
 * it's shared across all instances of Foo. Quick demo :
 */

var a = new Foo();
var b = new Foo();
a.setBar('a');
b.setBar('b');
alert(a.getBar()); // alerts 'b' :(

/*
 * A better approach might be using conventions for the private variables
 * : any private variable should start with an underscore. This
 * convention is well known and widely used, so when another programmer
 * uses or alters your code and sees a variable starting with underscore,
 * he'll know that it's private, for internal use only and he won't
 * modify it.
 * Here's the rewrite using this convention :
 */

var Foo = (function() {
    // constructor
    function Foo() {
        this._bar = "some value";
    };

    // add the methods to the prototype so that all of the
    // Foo instances can access the private static
    Foo.prototype.getBar = function() {
        return this._bar;
    };
    Foo.prototype.setBar = function(bar) {
        this._bar = bar;
    };

    return Foo;
})();

/*
 * Now we have instantiation, inheritance, but we've lost our
 * encapsulation in favor of conventions :
 */

var a = new Foo();
var b = new Foo();
a.setBar('a');
b.setBar('b');
alert(a.getBar()); // alerts 'a' :)
alert(b.getBar()); // alerts 'b' :)

// but the private vars are accessible  :

delete a._bar;
b._bar = null;
alert(a.getBar()); // alerts undefined :(
alert(b.getBar()); // alerts null :(
```

# tldr is great for man pages

```shell
~ % tldr gpg

gpg

GNU Privacy Guard.

- Sign doc.txt without encryption (writes output to doc.txt.asc):
    gpg --clearsign doc.txt

- Encrypt doc.txt for alice@example.com (output to doc.txt.gpg):
    gpg --encrypt --recipient alice@example.com doc.txt

- Encrypt doc.txt with only a passphrase (output to doc.txt.gpg):
    gpg --symmetric doc.txt

- Decrypt doc.txt.gpg (output to STDOUT):
    gpg --decrypt doc.txt.gpg

- Import a public key:
    gpg --import public.gpg

- Export public key for alice@example.com (output to STDOUT):
    gpg --export --armor alice@example.com

- Export private key for alice@example.com (output to STDOUT):
    gpg --export-secret-keys --armor alice@example.com
```
