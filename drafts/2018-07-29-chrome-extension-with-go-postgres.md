---
templateKey: blog-post
title: chrome extension with go + postgres
date: '2018-07-29T17:26:11-04:00'
description: log
tags:
  - postgres
  - go
---

*for now just recording the steps along the way :~*)

# beautifulsoup & parsing:

```python
#!/usr/bin/env python3

# go + postgres database fetching python application

# 1. curl the print url format
#    of susan miller's horosopes
#    (or any resource)

# 2. with results of curl, parse the <p> elements
#    in the body of the (full) doc like so:
#
# r = BeautifulSoup(html_doc, 'html.parser')
# for p in r.find_all('p')
#     p.prettify() // for text w/ html tags included

# 3. insert the results into the table
#     {CURRENT_MONTH} HORORSCOPES
#    where the schema is ~
#     {sign} {horo_html_string}


#################

from bs4 import BeautifulSoup

html_doc = """
<!doctype html>
<html class="no-js"  lang="en-US" prefix="og: http://ogp.me/ns#">
  <!--etc-->
  <div class="article horoscope-content">
    <h2>Your Horoscope by Susan Miller</h2>
    <p>You are just coming off a highly romantic full moon of late last month in Sagittarius, May 29. That full moon was chock full of loving feelings, which might have been directed to the person you are dating, or who is your spouse who adores you. Or, you may have been directing all your love toward a child. Alternatively, you may have been excited to hear the stork will be delivering a tiny baby to your household soon. Or, you might have enjoyed this full moon by celebrating the completion of an important creative project.</p>
    <p>That full moon accompanied an entourage of planets including good luck Jupiter in your home sector (promising you&#8217;d find a sunny, large home), Venus in your confidential sector (promising private time for the two of you), and Neptune in your eighth house of money, gifts, and physical expression of love. Each planet will assume one of the three points of a glittering triangle and work together to make you happy. Dear Leo, you have amazing star power. Now, as you enter June, you have more sweet days to look forward to doing.</p>
    <p>On Friday, June 1, Venus and Jupiter will be in heavenly alignment, indicating events involving family should be gratifying, quite special, and even luxurious. Or, if you are currently decorating your home, this is a day when you should be browsing shops, because the item you&#8217;ve been searching for to make your room complete is likely to catch your eye.</p>
    <p>Saturday, June 2, will bring Venus in communication with Neptune, one of the most glamorous aspects possible. This is the perfect evening to plan something for the two of you. If you have no special someone, this could be an ideal day for a blind date set up by a friend.</p>
    <p>Do all you can to finish up all important matters in the first half of June, for soon, Mars, the energy planet, will slow down in weak retrograde action, June 26 to August 27. Mars will take time to ramp up again once it awakens at the end of August, a point you need to keep in mind. Because Mars will remain in Aquarius the better part of six months, a highly unusual trend (more typical is the six or seven weeks Mars would stay in one sign), you will be focused very strongly on your partner. You won&#8217;t have full control, so you will do best to listen and take in all that is happening, but not to take the reins.</p>
    <p>With Mars retrograde, it is not a time to start new projects and relationships but to improve on the ones you already did. You may see a need for more backtracking of previous projects and decisions than you might like, but keep in mind that we are all in the same boat. The universe is giving you something that we rarely get &#8211; time to polish up projects and relationships of the past to make them even better.</p>
    <p>Mars and Uranus are having a long-term tiff, and at times anger will blow up. Think back to May 15 and the many days surrounding that date &#8211; you may have felt you are walking on eggs because others were so quick to ignite. Or, they may have been picking a scab you have, and you were quick to react. Another exact moment will happen on August 1, and after that, September 18. Until that last meeting, be careful what you say to partners in love or business, for later you may regret what you said.</p>
    <p>Friends will play a bigger role in your life after the new moon in Gemini 23 degrees, so it is a signal that you can begin to circulate more now that your career is on such an impressive trajectory. It&#8217;s a time to be open to new people and to allow yourself to be inspired by some of the new people you meet to shape your own course as they have done.</p>
    <blockquote><p>The full moon of <span data-term="goog_823009017">June 27</span> will receive a spectacular beam from surprising Uranus, now in your house of fame and honors. You are about to get outstanding publicity or new job offer, out of the blue. This aspect will boost your standing in the community, or the world &#8211; you will be thrilled.</p></blockquote>
    <p>If you have not been active in social media, this new moon will coax you to post more often, or to join a social media venue that is new to you, such as if you have always been on Facebook to try Twitter, as one example. Be careful of what you post. With Neptune manufacturing fog, you may say something that makes some others take offense and inadvertently set off a firestorm.</p>
    <p>There will be crosscurrents at this new moon, for as said earlier, Neptune will be in hard angle to the new moon, indicating confusion or misinformation between you and a friend or new acquaintance. If you volunteer on the board of an organization or club, you may assume certain things are fine, but not realize things are going on that would not please you. In fact, it may have something to do with how the budgets are being handled.</p>
    <p>I am concerned about this new moon because Mercury, the ruler of Gemini, will receive difficult confrontation from Saturn. To protect yourself, don&#8217;t sign important documents, and don&#8217;t commit your time or interest to anything new at this time. Wait until June 19, a perfect day to reach accord and to round out the elements of the plan. I like June 19 because Mercury will meet with Jupiter &#8211; profits are likely to follow your actions.</p>
    <p>Venus&#8217; move into Leo will be a wonderful bonus for you, and that will start on June 13 and stay until July 9. This is the time to pick up new designer threads on sale &#8211; outfits that you saw and loved but smartly waited until the expensive designer prices went on sale. Nothing but the best will be right for you this month. This means the second half of June will be your best time to step out to socialize for fun and love.</p>
    <p>I already mentioned earlier that Tuesday June 19 would be a special day, when Mercury and Jupiter will combine forces. Not only will it be a great day for signing important papers, it will also be the right day to make a big sales call or presentation with the aim to make an important sale of property, ideas, goods, or services. In the evening, see friends &#8211; arrange a big dinner in a restaurant (where everyone pays for their own meal) so that you can reconnect. On this day, your event would bring over-the-top fun and be a big hit.</p>
    <p>Several days later you will have a red-letter day, Friday, June 22, special again for your career. Uranus in your solar tenth house of career reputation will send a beam to the mighty Sun, your very own star. (The Sun rules Leo.) This is a day when all the career surprises will be happy ones. Use this day for a confidential meeting with VIP and let nature take its course.</p>
    <p>The full moon in Capricorn 6 degrees on June 27 is a weighty one on the surface, but that also has goodies packed inside as a surprise. It will light your sixth house of work projects. This is not the area of your chart that rules your career success, honors, and achievement (that&#8217;s the tenth house), but rather the area of the chart that rules assignments and the day-to-day work projects that cross your desk. This full moon will be conjunct Saturn, so the work to finish it will be strenuous.</p>
    </body>
</html> <!-- end page -->
"""
r = BeautifulSoup(html_doc, 'html.parser')
for p in r.find_all('p'):
    # print(p.get_text()) this func returns plain text dvs .innerHTML of p tags only

    print(p.prettify())
    # this func returns formatted html of
    # *** JUST THE BODY***
    # [ no head, meta, footer, scripts &c
    # it DOES however include anything nested in a <p>, e.g.
    #
    # <p>
    #   <a class="button" href=""> learn more </a>
    # </p>

    # <p>
    #  Venus will enter Leo on June 13 to July 9, a wonderful time for you to circulate if you are single, or to make plans with our partner to do things together ifyou are attached. Most Leos love to shop – here is your chance to add beautiful, designer additions to your wardrobe. It’s always fun to venture out wearing a fabulous new outfit – this adds to that alluring quality called confidence.
    # </p>
    #
    # All the advice you will read on your Year Ahead 2018 Astrological Calendar was calculated, interpreted, and written by me, Susan Miller, using clear, easy-to-understand language. The Year ahead 2018 wall calendar has my complete astrological comments printed on the date they occur. The calendar includes fourteen original illustrations by renowned illustrator Izak Zenou who adorned the Wall Calendar two years ago.
    # <p class="sidebar-ad-text">
    #  All the advice you will read on your Year Ahead 2018 Astrological Calendar wascalculated, interpreted, and written by me, Susan Miller, using clear, easy-to-understand language. The Year ahead 2018 wall calendar has my complete astrological comments printed on the date they occur. The calendar includes fourteen original illustrations by renowned illustrator Izak Zenou who adorned the Wall Calendar two years ago.
    # </p>
    #
    # Learn More
    #
    # <p>
    #  <a class="button primary" href="https://www.astrologyzone.com/store/year-ahead-2018-calendar/">
    #   Learn More
    #  </a>
    # </p>
    #
    # Stay in touch with changing planetary events by joining Susan’s email list and getting her Newsletter.
    # <p>
    #  Stay in touch with changing planetary events by joining Susan’s email list andgetting her Newsletter.
    # </p>
    #
    # ©2018 Astrology Zone & Susan Miller. All Rights Reserved.
    # <p class="copyright">
    #  ©2018 Astrology Zone &amp; Susan Miller. All Rights Reserved.
    # </p>
```

# `fetch()`ing in the browser

first register permissions for the url of the resource yr trying to fetch:

```json
manifest.json

"name": "cogo ext",
//
"permissions": ["storage", "http://cogo.herokuapp.com/db/", "activeTab", "declarativeContent"]
```

then this'll do it:

```javascript
// background.js

fetch("http://cogo.herokuapp.com/db/leo")
  .then((response) => response.text())
  .then((body) => console.log(body))

// read from DB: leo horoscope: drink water '\x02'
```

# git

```bash
git add -p
git commit -m "etc"
git push heroku master # pushes to heroku
git push               # pushes to github
```
# postgres

**note**: fish's autocomplete slays all other shells, e.g. typing fish `heroku pg <tab>` gives:

```bash
pg                                       (manage heroku-postgresql databases)
pg:backups                    (manage backups of heroku postgresql databases)
pg:backups:cancel  (cancel an in-progress backup or restore (default newest))
pg:backups:capture                                     (capture a new backup)
pg:backups:delete                                           (delete a backup)
pg:backups:download                               (downloads database backup)
pg:backups:info                     (get information about a specific backup)
pg:backups:restore          (restore a backup (default latest) to a database)
pg:backups:schedule               (schedule daily backups for given database)
pg:backups:schedules                                   (list backup schedule)
pg:backups:unschedule                                    (stop daily backups)
pg:backups:url           (get secret but publicly accessible URL of a backup)
```
## to get config vars

```bash
heroku config

#output:

tyler@workmb ~/goco> $ heroku config
  === frozen-basin-30116 Config Vars
  DATABASE_URL:         postgres://blahblah:666@ec2-69-69-666-666.compute-1.amazonaws.com:5432/fasdfasdfasd
```
## connecting from cl

```bash
tyler@workmb ~/goco> heroku pg:psql
--> Connecting to postgresql-lively-696969

psql (10.4)
SSL connection (protocol: TLSv1.2, cipher:69-, bits: 256, compression: off)
Type "help" for help.

frozen-basin-666::DATABASE=>
```
## example postgres flow

after making the /db route (following go-getting-started) where each visit 2 localhost:5000/db records a new entry into a table `ticks`:

```sql
select * from ticks

    ticks
----------------------------
 2018-07-29 17:13:15.005153
```

now visit localhost:5000/db and then exe the same sql command et voila:

```sql
     ticks
----------------------------
 2018-07-29 17:13:15.005153
 2018-07-29 17:13:17.696106
 ```

# runnning heroku app locally

```bash
heroku local
```

# troubleshooting

did u run `go install`?

did u try pushing to heroku master n seeing if it 1. fails 2. succeeds and doesn't work in prod

did u check papertrail --logs

re routing: do you / don't you have a trailing slash?

---

# GO notes

## GO SQL ref: <https://golang.org/pkg/database/sql/>

```go
Rows is the result of a query. Its cursor starts before the first row of the result set. Use Next to advance through the rows:

rows, err := db.Query("SELECT ...")
...
defer rows.Close()
for rows.Next() {
    VAR ID INT
    VAR NAME STRING
    err = rows.Scan(&id, &name)
    ...
}
err = rows.Err() // get any error encountered during iteration
...
type Rows struct {
        // contains filtered or unexported fields
}
```
## GO FMT <https://golang.org/pkg/fmt/>

Integer:

```go
%b	base 2
%c	the character represented by the corresponding Unicode code point
%d	base 10
%o	base 8
%q	a single-quoted character literal safely escaped with Go syntax.
%x	base 16, with lower-case letters for a-f
%X	base 16, with upper-case letters for A-F
%U	Unicode format: U+1234; same as "U+%04X"
```

# heroku

## go-getting-started

[with Go on Heroku](https://devcenter.heroku.com/articles/getting-started-with-go) article - check it out.

```sh
$ go get -u github.com/heroku/go-getting-started
$ cd $GOPATH/src/github.com/heroku/go-getting-started
$ heroku local
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

You should also install [govendor](https://github.com/kardianos/govendor) if you are going to add any dependencies to the sample app.

- [Go on Heroku](https://devcenter.heroku.com/categories/go)

<img src="/img/options.png" />

<img src="/img/dbcogo.png" />
