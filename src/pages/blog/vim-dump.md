---
templateKey: blog-post
title: 'vim, editor dump'
date: '2018-09-15T20:00:31-04:00'
description: vscode?
tags:
  - vscode
  - vim
  - vs
---

## :h vim

i went weeks hitting ctrl + p which search _only node modules_ before 
hitting `:h CtrlP` where i learned how to set the custom ignore paths :~)

```vimscript
:h CtrlP

You can use Vim's |'wildignore'| to exclude files and directories from the
results.
Examples: >
  " Excluding version control directories
  set wildignore+=*/.git/*,*/.hg/*,*/.svn/*        " Linux/MacOSX
  set wildignore+=*\\.git\\*,*\\.hg\\*,*\\.svn\\*  " Windows ('noshellslash')
```

## vim !$

or any command supplied w/ last bit of previous output

## vim https://vim.fandom.com/wiki/Vim_Tips_Wiki

or any url = edit the html of said page

## r!

execute a command and print results under cursor

```vimscript
:r! echo $PATH
```

## vim frozen?

1. review `autocmd`s like autocmd BufWritePre * %s/\s\+$//e`
2. ctrl+c

## jump to last known cursor position / rename file

[src](https://github.com/harlow/dotfiles/blob/master/vim/functions/last_cursor_position.vim)

```vim
augroup vimrcEx
  au!

  autocmd FileType text setlocal textwidth=78

  autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif
augroup END

function! RenameFile()
    let old_name = expand('%')
    let new_name = input('New file name: ', expand('%'), 'file')
    if new_name != '' && new_name != old_name
        exec ':saveas ' . new_name
        exec ':silent !rm ' . old_name
        redraw!
    endif
endfunction

map <leader>n :call RenameFile()<cr>
```

## encrypt a file w/ a key

`:X`

enter a key

`:wq!`

open the file, re-enter the key

## search word beneath cursor in current dir

... and navigate 2 the first result... (in a new buffer!)

`nnoremap <F5> :grep <C-R><C-W> *<CR>`

[src](http://vim.wikia.com/wiki/Mapping_keys_in_Vim_-_Tutorial_%28Part_1%29)

## plugin overload?

`vim --noplugin`

## <3 the current setup?

`:mk copy-of-current-settings.vim`

```vim
copy-of-current-settings.vim

if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
imap <Nul> <C-Space>
inoremap <expr> <Up> pumvisible() ? "\" : "\<Up>"
inoremap <expr> <Down> pumvisible() ? "\" : "\<Down>"
inoremap <expr> <S-Tab> pumvisible() ? "\" : "\<S-Tab>"
inoremap <silent> <Plug>NERDCommenterInsert  <BS>:call NERDComment('i', "insert")
inoremap <silent> <expr> <Plug>delimitMateS-BS delimitMate#WithinEmptyPair() ? "\<Del>" : "\<S-BS>"
inoremap <silent> <Plug>delimitMateBS =delimitMate#BS()
inoremap <silent> <C-Tab> =UltiSnips#ListSnippets()
" etc
```

## what CTRL-x does?

`:h ctrl-x`

## delete rest of line

instead of `d $` use `C`

## ctrl+p = best file explorer

don't use nnn, vifm, ranger, lynx etc.

## marks & jumps

`ms` = set a mark @ spot under cursor
`s` = go back 2 ms

(quicker: use c-i <tab> + c-o)

```vim
CTRL-O      Go to [count] Older cursor position in jump list

<Tab>   or          *CTRL-I* *<Tab>*

CTRL-I      Go to [count] newer cursor position in jump list
```

## `set guifont=*`

brings up font requester!

## ale > syntastic

by mucho ~ \`:ALEInfo\` on a rando blogpost in markdown returns:

```vim
 Current Filetype: markdown

Available Linters: \['alex', 'markdownlint', 'mdl', 'proselint', 'redpen', 'remark-lint', 'textlint', 'vale', 'write-good']

Enabled Linters: \['alex', 'markdownlint', 'mdl', 'proselint', 'redpen', 'remark-lint', 'textlint', 'vale', 'write-good']

Suggested Fixers:

'prettier' - Apply prettier to a file.

Linter Variables:
let g:ale_markdown_mdl_executable = 'mdl'
let g:ale_markdown_mdl_options = ''

Global Variables:
let g:ale_completion_delay = v:null
let g:ale_fix_on_save = 0
```

## :spell + zg + z=

```vim
// .vimrc

map <F5> :setlocal spell! spelllang=en_us<CR>

```

## `z=` find suggestions

`zg` add word to list

## div>ul>li\*3 + ctrl y,

```html
<div>
<ul>
  <li><a href="#">
    emmet
  </a></li>
  <li><a href="#">
    is
  </a></li>
  <li><a href="#">
   crazy
  </a></li>
</ul>
</div>
```

<https://docs.emmet.io/>

## gq}

wrap everything cutely, magically

## CD (NERDTree)

guess what this does

guess how many hours of my life i've wasted

opening a terminal to use \`ack\` bc i'd opened vim in not-the-directory

## L + ctrl + tab (vim-snippets)

```
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod

tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At

vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,

no sea takimata sanctus est Lorem ipsum dolor sit amet.
```

## ctrl p

ctrl-p(lease) use it

## keybindings

```vimscript
Key Action Followed by
a enter insertion mode after current character text, ESC
b back word
c change command cursor motion command
d delete command cursor motion command
e end of word
f find character after cursor in current line character to find
g UNBOUND
h move left one character
i enter insertion mode before current character text, ESC
j move down one line
k move up one line
l move right one character
m mark current line and position mark character tag (a-z)
n repeat last search
o open line below and enter insertion mode text, ESC
p put buffer after cursor
q UNBOUND
r replace single character at cursor replacement character expected
s substitute single character with new text text, ESC
t same as "f" but cursor moves to just before found character character to find
u undo
v UNBOUND
w move foreward one word
x delete single character
y yank command cursor motion command
z position current line CR = top; "." = center; "-"=bottom
A enter insertion mode after end of line text, ESC
B move back one Word
C change to end of line text, ESC
D delete to end of line
E move to end of Word
F backwards version of "f" character to find
G goto line number prefixed, or goto end if none
H home cursor - goto first line on screen
I enter insertion mode before first non-whitespace character text, ESC
J join current line with next line
K UNBOUND
L goto last line on screen
M goto middle line on screen
N repeat last search, but in opposite direction of original search
O open line above and enter insertion mode text, ESC
P put buffer before cursor
Q leave visual mode (go into "ex" mode)
R replace mode - replaces through end of current line, then inserts text, ESC
S substitute entire line - deletes line, enters insertion mode text, ESC
T backwards version of "t" character to find
U restores line to state when cursor was moved into it
V UNBOUND
W foreward Word
X delete backwards single character
Y yank entire line
Z first half of quick save-and-exit "Z"
0 move to column zero
1-9 numeric precursor to other commands [additional numbers (0-9)] command
(SPACE) move right one character
! shell command filter cursor motion command, shell command
@ vi eval buffer name (a-z)
# UNBOUND
$ move to end of line
% match nearest [],(),{} on line, to its match (same line or others)
^ move to first non-whitespace character of line
& repeat last ex substitution (":s ...") not including modifiers
* UNBOUND
( move to previous sentence
) move to next sentence
\ UNBOUND
| move to column zero
- move to first non-whitespace of previous line
_ similar to "^" but uses numeric prefix oddly
= UNBOUND
+ move to first non-whitespace of next line
[ move to previous "{...}" section "["
] move to next "{...}" section "]"
{ move to previous blank-line separated section "{"
} move to next blank-line separated section "}"
; repeat last "f", "F", "t", or "T" command
' move to marked line, first non-whitespace character tag (a-z)
` move to marked line, memorized column character tag (a-z)
: ex-submode ex command
" access numbered buffer; load or access lettered buffer 1-9,a-z
~ reverse case of current character and move cursor forward
, reverse direction of last "f", "F", "t", or "T" command
. repeat last text-changing command
/ search forward search string, ESC or CR
< unindent command cursor motion command
> indent command cursor motion command
? search backward search string, ESC or CR
^A UNBOUND
^B back (up) one screen
^C UNBOUND
^D down half screen
^E scroll text up (cursor doesn't move unless it has to)
^F foreward (down) one screen
^G show status
^H backspace
^I (TAB) UNBOUND
^J line down
^K UNBOUND
^L refresh screen
^M (CR) move to first non-whitespace of next line
^N move down one line
^O UNBOUND
^P move up one line
^Q XON
^R does nothing (variants: redraw; multiple-redo)
^S XOFF
^T go to the file/code you were editing before the last tag jump
^U up half screen
^V UNBOUND
^W UNBOUND
^X UNBOUND
^Y scroll text down (cursor doesn't move unless it has to)
^Z suspend program
^[ (ESC) cancel started command; otherwise UNBOUND
^\ leave visual mode (go into "ex" mode)
^] use word at cursor to lookup function in tags file, edit that file/code
^^ switch file buffers
^_ UNBOUND
^? (DELETE) UNBOUND
Definitions
UNBOUND - this key is not normally bound to any vi command
word - a lower-case word ("w", "b", "e" commands) is defined by a consecutive string of letters, numbers, or underscore, or a consecutive string of characters that is not any of {letters, numbers, underscore, whitespace}
Word - an upper-case word ("W", "B", "E" commands) is a consecutive sequence of non-whitespace.
sentence
paragraph
cursor motion command - any command which positions the cursor is ok here, including the use of numeric prefixes. In addition, a repeat of the edit command usually means to apply to the entire current line. For example, "<<" means shift current line left; "cc" means replace entire current line; and "dd" means delete entire current line.
```
