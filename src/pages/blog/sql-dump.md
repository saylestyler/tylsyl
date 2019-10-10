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

### cli psql

> `psql` is a regular PostgreSQL client application. In order to connect to a database you need to know the name of your target database, the host name and port number of the server, and what user name you want to connect as. psql can be told about those parameters via command line options, namely -d, -h, -p, and -U respectively.


### haskell + sql

gorgina little snippet from work ~> Query for getting list of 50 latest tv episodes (aka media items in vfiles belonging to vfilestv)


```haskell
-- | TODO: Add pagination to get all episodes?

tvShowMedia :: HasPostgres m => m [MediaVfile]
tvShowMedia = query_ q
  where q = [sql|

    SELECT max(mv.id),
           max(mv.vfile_id),
           mv.media_id,
           substring(mc.caption, 0, 150) || '...' as caption,
           0,
           m.published_at
    FROM vfiles v
      JOIN media_vfiles mv
        ON v.id = mv.vfile_id
      JOIN media m
        ON mv.media_id = m.id
      LEFT JOIN media_captions mc
        ON mv.media_id = mc.media_id
    WHERE m.published_at IS NOT NULL
      AND m.person_id = 391
      AND v.person_id = 391
    GROUP BY mv.media_id, mc.caption, m.published_at
    ORDER BY m.published_at DESC
    LIMIT 50

;|]
```


