---
templateKey: blog-post
title: sql dump
date: '2018-09-27T11:01:31-04:00'
description: select notes from sqlnotes
tags:
  - sql
  - dump
  - postgres
---

<div class="note green">
  If you omit the host name, psql will connect via a Unix-domain socket to a server on the local host, or via TCP/IP to localhost on machines that don't have Unix-domain sockets.
</div>

### connecting to db

> `psql` is a regular PostgreSQL client application. In order to connect to a database you need to know the name of your target database, the host name and port number of the server, and what user name you want to connect as. psql can be told about those parameters via command line options, namely -d, -h, -p, and -U respectively.

