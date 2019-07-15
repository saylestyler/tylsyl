---
templateKey: blog-post
title: connecting to ur sqlite3 iMessage db x python
date: '2017-07-12T17:52:00-04:00'
description: babys first github star
tags:
  - python
---
~ Today I got my first GitHub star!

The repo is iExport which is an innocent piece of Python to extract the contents of a OS X user's chat.db, conveniently contained out-of-sight in `~/Library/Messages/chat.db` and accessible via `sqlite3 chat.db`

:~)

Here's version 1:

```python
#!/usr/bin/env python3
# inspired by https://gist.github.com/nslater/b3cbc894ad2c2516dd02

import sys
import urllib
import urlparse
import base64
import mimetypes
import cgi

from os import path

import sqlite3

# the crux
CHAT_DB = path.expanduser("~/Library/Messages/chat.db")

# the time
EPOCH=978307200

# style @ will
print("""
  <!doctype html>
  <html>
  <head>
    <meta charset=\"utf-8\">
    <style>
    body { margin: 0; padding: 0; }
    .message {
        white-space: pre-wrap;
        max-width: 800px;
        padding: 10px;
        margin: 10px;
    }
    .me { background-color: #A6DBFF; }
    .buddy { background-color: #EEE; }
    .message img { max-width: 800px; }
    </style>
  </head>
  <body>
""")

def list_chats():
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
        SELECT chat_identifier
          FROM chat;
    """)
    for row in rows:
        print(row[0])

def export_all():
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
        SELECT chat_identifier
          FROM chat
          LIMIT 15;
    """)
    for row in rows:
        export(row[0])
        print('<hr>')



def export(chat_id):
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
          SELECT datetime(m.date + ?, 'unixepoch', 'localtime') as fmtdate,
                 m.is_from_me,
                 m.text,
                 a.filename
            FROM chat as c
      INNER JOIN chat_message_join AS cm
              ON cm.chat_id = c.ROWID
      INNER JOIN message AS m
                 ON m.ROWID = cm.message_id
       LEFT JOIN message_attachment_join AS ma
              ON ma.message_id = m.ROWID
       LEFT JOIN attachment as a
              ON a.ROWID = ma.attachment_id
           WHERE c.chat_identifier = ?
        ORDER BY m.date;
    """, (EPOCH, chat_id))


    for row in rows:
        date = row[0]
        who = "me" if row[1] is 1 else "buddy"
        if row[3]:
            attachment = path.expanduser(row[3])
            media_type = mimetypes.guess_type(attachment)[0]
            try:
                with open(attachment, "rb") as image:
                    encoded_data = base64.b64encode(image.read())
            except:
                encoded_data = ""
            text = "<img src=\"data:%s;base64,%s\">" % (
                media_type, encoded_data)
            text = "<img src=\"file://%s\">" % (attachment)

        else:
            text = cgi.escape(row[2] or '')
        line = "<div class=\"message %s\" title=\"%s\">%s</div> " % (
            who, date, text)
        print(line.encode("utf8"))

    print("""
      </body>
      </html>
    """)

def main():
    if len(sys.argv) == 1:
        export_all()
        #list_chats()
        sys.exit()
    chat_id = None
    if len(sys.argv) > 1:
        chat_id = sys.argv[1]
    if len(sys.argv) > 2:
        sys.exit()
    export_all()

if __name__ == "__main__":
    main()
```

## beautification

now let's see if i can improve upon the first python I wrote over a year ago
when I would've been hard pressed to explain base64 encoding or even encoding
or even base-ic math :^O

* fix indentation causing `</body></html> to repeat` (whitespace sensitivity
  :horror:)
* get rid of unused imports
* get rid of the `main()` method mess

```python
#!/usr/bin/env python3

import base64
import mimetypes
import cgi

from os import path

import sqlite3

CHAT_DB = path.expanduser("~/Library/Messages/chat.db")

EPOCH = 978307200

print("""
<!doctype html>
<html>
<head>
<meta charset=\"utf-8\">
<style>
  body { margin: 0; padding: 0; }
  .message {
      white-space: pre-wrap;
      max-width: 800px;
      padding: 10px;
      margin: 10px;
  }
  .me { background-color: #A6DBFF; }
  .buddy { background-color: #EEE; }
  .message img { max-width: 800px; }
</style>
</head>
<body>
""")


def list_chats():
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
        SELECT chat_identifier
          FROM chat;
    """)
    for row in rows:
        export(row[0])


def export_all():
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
        SELECT chat_identifier
          FROM chat;
    """)
    for row in rows:
        export(row[0])


def export(chat_id):
    db = sqlite3.connect(CHAT_DB)
    cursor = db.cursor()
    rows = cursor.execute("""
          SELECT datetime(m.date + ?, 'unixepoch', 'localtime') as fmtdate,
                 m.is_from_me,
                 m.text,
                 a.filename
            FROM chat as c
      INNER JOIN chat_message_join AS cm
              ON cm.chat_id = c.ROWID
      INNER JOIN message AS m
                 ON m.ROWID = cm.message_id
       LEFT JOIN message_attachment_join AS ma
              ON ma.message_id = m.ROWID
       LEFT JOIN attachment as a
              ON a.ROWID = ma.attachment_id
           WHERE c.chat_identifier = ?
        ORDER BY m.date
           LIMIT 1;
    """, (EPOCH, chat_id))

    for row in rows:
        date = row[0]
        who = "me" if row[1] is 1 else "contact"
        if row[3]:
            attachment = path.expanduser(row[3])
            media_type = mimetypes.guess_type(attachment)[0]
            try:
                with open(attachment, "rb") as image:
                    encoded_data = base64.b64encode(image.read())
            except:
                encoded_data = ""
            text = "<img src=\"data:%s;base64,%s\">" % (
                media_type, encoded_data)
            text = "<img src=\"%s\">" % (attachment)

        else:
            text = cgi.escape(row[2] or '')
        line = "<div class=\"message from-%s\" title=\"%s\">%s</div>" % (
            who, date, text)
        print(line.encode("utf8"))


print("""
</body>
</html>
""")


export_all()
```

# to be continued!
