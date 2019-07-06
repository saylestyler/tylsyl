---
date: '2019-07-06T11:30:21-04:00'
title: swp files and swap
description: b4 u upgrade that ec2 instance
---
_i thought they were *auto*-scaling?_

when writing a shell script on an ec2 instance for that instance (mistake 1) i was amiss to find
that it was no longer working (mistake 2) "out of nowhere"

after doing some rando bit of debugging without remembering my steps (4) i was blessed with a new
error message to read: `disk full`

twaz indeed not _truly_ full: on doing

```shell
sudo find / -type f -size +10M -exec ls -lh {} \
```

i found a bevy of vim swp files, one which was 20gb

<h3 style='color: red; font-weight: 600'>TWENTY GIGABYTES</h3>

according to ImFeelingLucky's first result:

<img src="https://res.cloudinary.com/cloudimgts/image/upload/v1537247911/EMLandTXTfiles.jpg" />

around ~ 1.5 MILLION PAGES

# o but there's (much) more

another night, after downloading 30 apps at random, i Stumbled Upon (R)
[omni disk sweeper](https://www.omnigroup.com/) which revealed my largest
directory/file to be in rather shallow sight:

`~/.data/SWAP/.agrc.swp`

last modified: 2 years ago
size: 28gb

# wifeswp

from vim's `h: swap`

```
Recovery after a crash _crash-recovery_

You have spent several hours typing in that text that has to be finished
next morning, and then disaster strikes: Your computer crashes.

      DON'T PANIC!

<i>ironique</i>

You can recover most of your changes from the files that Vim uses to store
the contents of the file. Mostly you can recover your work with one command:
vim -r filename

1. The swap file |swap-file|
2. Recovery |recovery|

==============================================================================

1. The swap file _swap-file_

Vim stores the things you changed in a swap file. Using the original file
you started from plus the swap file you can mostly recover your work.

You can see the name of the current swap file being used with the command:

:sw[apname] _:sw_ _:swapname_

The name of the swap file is normally the same as the file you are editing,
with the extension ".swp".

* On Unix, a '.' is prepended to swap file names in the same directory as the
  edited file. This avoids that the swap file shows up in a directory
  listing.
* On MS-DOS machines and when the 'shortname' option is on, any '.' in the
  original file name is replaced with '\_'.
* If this file already exists (e.g., when you are recovering from a crash) a
  warning is given and another extension is used, ".swo", ".swn", etc.
* An existing file will never be overwritten.
* The swap file is deleted as soon as Vim stops editing the file.

Technical: The replacement of '.' with '\_' is done to avoid problems with
MS-DOS compatible filesystems (e.g., crossdos, multidos). If Vim
is able to detect that the file is on an MS-DOS-like filesystem, a
flag is set that has the same effect as the 'shortname' option.
This flag is reset when you start editing another file.
_E326_
If the ".swp" file name already exists, the last character is
decremented until there is no file with that name or ".saa" is
reached. In the last case, no swap file is created.

By setting the 'directory' option you can place the swap file in another place
than where the edited file is.
Advantages:

* You will not pollute the directories with ".swp" files.
* When the 'directory' is on another partition, reduce the risk of damaging
  the file system where the file is (in a crash).
  Disadvantages:
* You can get name collisions from files with the same name but in different
  directories (although Vim tries to avoid that by comparing the path name).
  This will result in bogus ATTENTION warning messages.
* When you use your home directory, and somebody else tries to edit the same
  file, he will not see your swap file and will not get the ATTENTION warning
  message.

<div class="green">
If you want to put swap files in a fixed place, put a command resembling the
following ones in your .vimrc:
  :set dir=~/tmp    (for Unix)
</div>

This is also very handy when editing files on floppy. Of course you will have
to create that "tmp" directory for this to work!

For read-only files, a swap file is not used. Unless the file is big, causing
the amount of memory used to be higher than given with 'maxmem' or
'maxmemtot'. And when making a change to a read-only file, the swap file is
created anyway.

The 'swapfile' option can be reset to avoid creating a swapfile. And the
|:noswapfile| modifier can be used to not create a swapfile for a new buffer.

# :NOS

:nos[wapfile] {command} _:nos_ _:noswapfile_
Execute {command}. If it contains a command that loads a new
buffer, it will be loaded without creating a swapfile and the
'swapfile' option will be reset. If a buffer already had a
swapfile it is not removed and 'swapfile' is not reset.
```
