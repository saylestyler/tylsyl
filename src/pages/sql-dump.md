---
date: '2019-07-06T11:35:23-04:00'
title: sql dump
description: sql stuff
---
# TCP/IP

If you omit the host name, psql will connect via a Unix-domain socket to a server on the local host, or via TCP/IP to localhost on machines that don't have Unix-domain sockets.

# psql

 `psql` is a regular PostgreSQL client application. In order to connect to a database you need to know the name of your target database, the host name and port number of the server, and what user name you want to connect as. psql can be told about those parameters via command line options, namely -d, -h, -p, and -U respectively.

# bash cron job for ec2

example of a bash script, ran from an EC2 instance that connects to a pg machine on RDS 

wrote it to automate away the fetching of some db info

```sh
#!/bin/bash

PROD_JUMP_IP="00.0.666.00"

function prod-pg-tunnel {
  ssh -i ~/.ssh/refresh.pem ubuntu@${PROD_JUMP_IP:?} -L 55432:"prod-db-rds.url-1.rds.amazonaws.com":5432 -M -S ssh-socket -fN
}

function exit-prod-tunnel {
  if [ -a ssh-socket ]; then
    ssh -S ssh-socket -O exit ubuntu@${PROD_JUMP_IP:?}
  fi
}

sendSignupsEmail() {
  prod-pg-tunnel

  local user_count="$(psql -d 'host=localhost port=55432 dbname=prod user=YsZlknN4OP4sJJPh' -c $'\COPY (SELECT count(*) FROM people where created_at > now() - interval \'1 day\') TO STDOUT' |
                  #awk '{print "<!doctype html><html><head><style> table,th,td{border:1px solid black; padding: 5px; text-align: left; border-collapse:collapse; font-family: Courier;}</style></head><p><strong>There were " $0 " signups today:</strong></p>";}')"

  exit-prod-tunnel
}

sendSignupsEmail
```
