---
type: blog
blog: true
title: Zoc7 and SSH dump
date: 2017-09-02 12:00:00
excerpt: today in having fun downloading terminal emulators
tags:
    - serious
    - ssh
    - networking
---

# SSH & Zoc7

ZOC (not) DOC

<div class="green">
ZOC is a terminal app and SSH client. It emulates Emulations: xterm, VT220, TN3270, TN5250, Wyse, and QNX, plus supports communication SSH, Telnet, Rlogin, Modem, and Serial Cable.
</div>

what follows is a sprawling, not-cohesive account of downloading a program, pressing buttons, discovering RFCs, typing-out-loud about interesting RFCs, a bloated and even more discursive glossary compiled along the way, and in no way represents the thoughts/beliefs of tyler sayles’s more rational, goal-oriented 2018-mind

lo,

while aimlessly scrolling thru terminal emulators &c I saw ZOC7 and clicked download

## whats this button do

(run sample script) is a button / hello world in the nav

cd’in2 `/Applications/zoc7.app/Contents/Resources/newuserprofile_english/REXX/sample.zrx`

shows the source:

    /* REXX */
    /* ^^^^^^ REXX programs always begin with /* REXX */ on the first line */
    
    /* clear the screen */
    CALL ZocClearScreen
    
    SAY "This is a REXX scripting example."
    SAY
    
    /* Ask user for his/her name */
    who= ZocAsk("What is your name")
    
    /* print some text to the ZOC window */
    /* (this time we're using REXX's internal SAY command) */
    SAY "Hello "||who||"!"
    SAY
    SAY "Thank you for choosing the ZOC Terminal."
    SAY
    SAY "For more information about REXX scripting, please "
    SAY "read the help topic at the bottom of the ZOC Script "
    SAY "menu. Alternately look at the extra documentation at "
    SAY "http://www.emtec.com/zoc/documents.html"
    
    EXIT

another button: (call to a host directory)

    Connected to TELEHACK port 39
    
    It is 6:05 pm on Friday, November 2, 2018 in Mountain View, California, USA.
    There are 45 local users. There are 26637 hosts on the network.
    
      Type HELP for a detailed command list.
      Type NEWUSER to create an account.
    
    May the command line live forever.

## what is ZOC

from [softpedia](https://mac.softpedia.com/get/Network-Admin/ZOC.shtml):

powerful terminal emulator with a comprehensive collection of efficient tools for establishing Telnet and secure shell connections to hosts and mainframes

- Designed to streamline the connection and communication process with various hosts while using different protocols
- an SSH and Telnet client
- the active connections are organized into tabs, while the main area is reserved for displaying host messages.
- once you establish a connection, you will be able to type commands, run scripts, or transfer files by using different protocols
- enables you to save connection profiles and offers you the possibility to add them to your user bar + place a link for the connection on your desktop
- able to handle popular transfer protocols
- includes support for a scripting language that has more than 200 commands.

## wikipedia rox

while looking up some terms above, the *Host (network)* entry has this P that included most of them

In operating systems, the term terminal host denotes a time-sharing computer or multi-user software providing services to computer terminals, or a computer that provides services to smaller or less capable devices,[1] such as a mainframe computer serving teletype terminals or video terminals. Other examples of this architecture include a telnet host connected to a telnet server and an xhost connected to an X Window client.

[here is a glossary of the other things i defined along the way](/#glossary)

## RFCs also rox

using the .rfc 0 command, one (me) finds that the first RFC deals with… yes, “Host Software. S. Crocker. April 1969”

    I.   A Summary of the IMP Software
    
    Messages
    
       Information is transmitted from HOST to HOST in bundles called
       messages.  A message is any stream of not more than 8080 bits,
       together with its header.  The header is 16 bits and contains the
       following information:
    
               Destination     5 bits
               Link            8 bits
               Trace           1 bit
               Spare           2 bits

## what is TELEHACK

WAT

# commands

while in evaluation mode, in Telehack, typing help will bring up a list of commands

## ching

.ching I Ching / The Book of Changes

    (c) 1995, 1999 Albert Dvornik <bert@mit.edu>

Hexagram text (c) 1988 The Regents of the University of California

    Type HELP CHING for more documentation

Type your question now: what do i needa do tn

Consulting the Oracle …………………………..

    60.  Chieh / Limitation
    
          -- --
          -----     above     K'an   The Abysmal, Water
          -- --
          -- --
          -----     below     Tui    The Joyous, Lake
          -----
    
     The Judgement
    
          Limitation. Success.
          Galling limitation must not be persevered in.
    
          Water over lake: the image of Limitation.
          Thus the superior man
          Creates number and measure,
          And examines the nature of virtue and correct conduct.

## hosts

The HOSTS command prints an up-to-date list of every host on the network.

## traceroute

traceroute  show path to

so, together, find a host, then traceroute arandomhost and u’ll get:

```bash
    .hosts
    
    amtfocus       Motorola, Inc. General Systems Secto  Arlington Heights
    // etc
    
    .traceroute amtfocus
    traceroute to amtfocus, 10 hops max, 40 byte packets
     1  telehack   24.103 ms  18.078 ms  18.170 ms
     2  oddjob   24.236 ms  26.220 ms  38.244 ms
     3  clout   33.137 ms  42.621 ms  56.783 ms
     4  mcdchg   48.968 ms  50.753 ms  55.507 ms
     5  amtfocus   59.389 ms  98.560 ms  60.775 ms
```

## zrun

returns a list of games e.g. zork a text based adventure game w/ a siq [wiki](https://en.wikipedia.org/wiki/Zork) history in early computin’

    .zork
    
    ZORK
    
    Welcome to ZORK.
    Release 13 / Serial number 040826 / Inform v6.14 Library 6/7
    West of House
    This is an open field west of a white house, with a boarded front door.
    There is a small mailbox here.
    A rubber mat saying 'Welcome to Zork!' lies by the door.
    
    >fun
    That's not a verb I recognise.
    
    >go
    You'll have to say which compass direction to go in.
    
    >go north
    North of House
    You are facing the north side of a white house.  There is no door here, and all the windows are barred.

# glossary [§](glossary)

**terminal emulator**

A terminal emulator, terminal application, or term, is a program that emulates a video terminal within some other display architecture. Though typically synonymous with a shell or text terminal, the term terminal covers all remote terminals, including graphical interfaces. A terminal emulator inside a graphical user interface is often called a terminal window. e.g. Terminal.app, iTerm, and… ZOC :~)

**SSH**

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.[1] Typical applications include remote command-line login and remote command execution, but any network service can be secured with SSH.

**Telnet**

Telnet is a protocol used on the Internet or local area network to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. User data is interspersed in-band with Telnet control information in an 8-bit byte oriented data connection over the Transmission Control Protocol.

**host** i think this word is confusing becuase it literally has 6+ definitions regularly used that mean v different things, so here are some:

1. **a unix program**

> a simple utility for performing DNS lookups. It is normally used to convert names to IP addresses and vice versa

    $ host hackmd.io
    
    hackmd.io has address 52.194.216.48
    hackmd.io has address 54.65.58.17
    hackmd.io has IPv6 address 2406:da14:88d:a100:1a64:5804:bc86:2c3b
    hackmd.io has IPv6 address 2406:da14:88d:a101:4dc5:6749:42f4:d474
    hackmd.io mail is handled by 10 inbound-smtp.us-east-1.amazonaws.com.

1. **literally, a host (computer)**

the good ole dictionary is good for understanding this concept of a host computer…

*a person, place, or organization that holds and organizes an event to which others are invited: Innsbruck once played host to the Winter Olympics.*

*(also host computer) a computer that mediates multiple access to databases mounted on it or provides other services to a computer network.*

*store (a website or other data) on a server or other computer so that it can be accessed over the*

1. **a network host**

A network host is a computer or other device connected to a computer network. A network host may offer information resources, services, and applications to users or other nodes on the network. A network host is a network node that is assigned a network address.

Computers participating in networks that use the Internet protocol suite may also be called IP hosts. Specifically, computers participating in the Internet are called Internet hosts, sometimes Internet nodes. Internet hosts and other IP hosts have one or more IP addresses assigned to their network interfaces. The addresses are configured either manually by an administrator, automatically at startup by means of the Dynamic Host Configuration Protocol (DHCP), or by stateless address autoconfiguration methods.

Network hosts that participate in applications that use the client-server model of computing, are classified as server or client systems. Network hosts may also function as nodes in peer-to-peer applications, in which all nodes share and consume resources in an equipotent manner.

the wiki goes on to the origin of the concept which is fascinating, and mentions telnet, and reminded me that the internet and (D)arpanet = related

## speaking of arpanet

`rfc` returns all rfcs w/ indexes so, `.rfc 308` gives u

    Network Working Group                   Marc Seriff
    Request for Comments 308                MIT-DMCG
    NIC 9259                                13 MARCH 1972
    References: RFC 254
    
                         ARPANET HOST AVAILABILITY DATA
    
         Several months ago a SURVEY program was implemented on the
    MIT-DMCG ITS PDP-10 system to aid in gathering information on the
    availability of various HOSTS on the ARPANET.  The purpose of this
    Request for Comments is threefold:
    
         1. to inform the Network Working Group of the
            existence of this information gathering service
            and about getting access to it,
    
         2. to present the results of SURVEY for its first
            few months, and
    
         3. to correct errors in our data or collection methods.

# clients

## hterm/libapps

contains the libdot JavaScript library and some web applications that make use of it.

[apps/libapps - Git at Google](https://chromium.googlesource.com/apps/libapps/)

## wash

> It is yet-another shell environment for the web. Wash's special trick is that it can “mount” virtual file systems using postMessage based IPC.

[wash - apps/libapps - Git at Google](https://chromium.googlesource.com/apps/libapps/+/HEAD/wash)

## scanssh

> ScanSSH supports scanning a list of addresses and networks for open proxies, SSH protocol servers, Web and SMTP servers. Where possible ScanSSH, displays the version number of the running services. ScanSSH protocol scanner supports random selection of IP addresses from large network ranges and is useful for gathering statistics on the deployment of SSH protocol servers in a company or the Internet as whole.

[ScanSSH - fast SSH server and open proxy scanner](https://www.monkey.org/~provos/scanssh/)
