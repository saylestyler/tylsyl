---
title: nice vue
date: 2021-06-09T00:57:29.011Z
excerpt: "bless and highly favored vue code "
tags: vue
blog: true
---
Sometimes I browse the [vue topic/tag](https://github.com/topics/vuejs) on github just to see how people-not-on-my-team write vue. I found [this web file browser]() with a vue frontend while scrolling, and figured I would post snippets from the code that were written nicely. 

## checking if there is a conflict on drop event

```js
let conflict = upload.checkConflict(items, baseItems);

if (conflict) {
  this.$store.commit("showHover", {
    prompt: "replace-rename",
    confirm: (event, option) => {
      overwrite = option == "overwrite"; // cool syntax 
      rename = option == "rename";
      event.preventDefault();
      this.$store.commit("closeHovers");
      action(overwrite, rename);
   },
});
```

## handling potentially complex click events 
```js
click: function (event) {
      if (!this.singleClick && this.selectedCount !== 0) event.preventDefault();

      setTimeout(() => {
        this.touches = 0;
      }, 300);
      this.touches++;

      if (this.touches > 1) {
        this.open();
      }

      if (this.$store.state.selected.indexOf(this.index) !== -1) {
        this.removeSelected(this.index);
        return;
      }
```

and 

```js
      // nice didn't know you could use event.shiftKey 
      if (event.shiftKey && this.selected.length > 0) {
        let fi = 0;
        let la = 0;

        if (this.index > this.selected[0]) {
          fi = this.selected[0] + 1;
          la = this.index;
        } else {
          fi = this.index;
          la = this.selected[0] - 1;
        }

        for (; fi <= la; fi++) {
          if (this.$store.state.selected.indexOf(fi) == -1) {
            this.addSelected(fi);
          }
        }

        return;
      }
```

and this super legible check: 

```js
      if (
        !this.singleClick &&
        !event.ctrlKey &&
        !event.metaKey &&
        !this.$store.state.multiple
      )
        this.resetSelected();
```

reminds me of the style used for another && check: 

```js
 showOverlay: function () {
   return (
     this.show !== null 
  && this.show !== "search" 
  && this.show !== "more"
   );
 },
```

## legible humanTime method 

also, imagine if browser's api was moment... I think [temporal proposal](https://tc39.es/proposal-temporal/docs/) addresses some of this... 

```js
    humanTime: function () {
      if (this.selectedCount === 0) {
        return moment(this.req.modified).fromNow();
      }
      return moment(this.req.items[this.selected[0]].modified).fromNow();
    },
```

## prettier formatting 

can be unpretty sometimes, and I can't tell if I like this or hate this:

```js
     commands(
        this.path,
        cmd,
        (event) => {
          results.text += `${event.data}\n`;
          this.scroll();
        },
        () => {
          results.text = results.text.trimEnd();
          this.canInput = true;
          this.$refs.input.focus();
          this.scroll();
        }
      );
```