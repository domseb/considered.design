---
layout: post
title: Shortcuts for automated bliss
permalink: /shortcuts-for-automated-bliss/
featured: true
---

Well everyone, I’ve finally done it. I’ve cemented Shortcuts in my life, and I’m happy to say I’m well on my way to automated bliss. I’ve attempted to find this bliss a few times — with IFTTT, with the previously named Workflow, with the rarely working smart bulbs — but after getting the Apple Watch last year, setting complex things like laundry timers was easier, and the need for Syndrome like power ebbed away.

As 2020 rolled in though, I saw someone using a Shortcut to revert one of the most annoying behaviours in iOS (low battery mode being turned off after it hits 85%), and I started playing around with it again. Maybe in part because I can’t really code, but it’s both empowering and exciting to create Shortcuts, and there is a tinkering aspect to it which is deeply enjoyable. A feeling mirrored by Khoi Vin in [his recent post on Shortcuts](https://www.subtraction.com/2019/12/04/shortcuts-and-screenshots-on-ios/) — it’s also easily possible to spend far more time on them that they could possibly ever save you.

I’ve made a handful I’m using daily now, and think they’re at a place that others might find them useful now too. The music one below was even enough to make me switch from Spotify to Apple Music (currently not possible to automate or shortcut anything with Spotify), and having artwork again to browse through without being pushed to their own discovery sections, I’ve really enjoyed. Once I figure how to host these I'll include the iCloud links so others can use them too.

## Focus work & approachable work

Getting the right conditions to do focus work is really important to me, and it’s always boiled down to two things; removing as many distractions as I can, and and giving others the signals that I'm doing focus work so I won’t be disturbed. The more clear and repeatable the prompts and routine are for me, the more pavlovian my response is, and the easier I find it to get into that focus state.

This sounds silly (maybe even sad knowing I come from London), but the best focus prompt I have is rain in noise cancelling headphones. Combining that with no notifications flying into my view, and I’m as distraction free as it’s possible to get (handled by 1-3 in this shortcut).

Wearing big noise cancelling headphones is a good physical signal you’re doing focus work (although as we know, not aaaalways respected), but at Qwilr we also have distributed teams, so I wanted to be able to signal it clearly on Slack to everyone is most useful to me. I’ve tried this a few different ways before (using a combination of IFTTT & Glitch), but it was really unreliable, and after a few maiden voyages just stopped working altogether. This new setup works perfectly, but to do the Slack shortcuts it runs you’ll need to [create your personal Slack token](https://api.slack.com/custom-integrations/legacy-tokens) to replace mine, and [use their methods here](https://api.slack.com/methods/users.profile.set/test) to spit out the url with your token.

#### Shortcut steps

1. Select a playback device (useful if I’m wearing headphones or not)
2. Plays my Focus playlist (rain track)
3. Turns on do not disturb on all my devices
4. Updates my Slack status, sets me away, and puts on DND
5. Let’s me select a timer for how long I want to do focus work for

{% include modules/image-trio.html url1="/assets/blog/focuswork-a.PNG" url2="/assets/blog/focuswork-b.PNG" url3="/assets/blog/focuswork-g.PNG" description="The steps to run the Focus work Shortcut, including the Slack api call for setting presence" %}

To set my slack status was a little more complicated (for some reason I couldn't get it to work through the same url schemes as above), but found [this Shortcut from Jake Bathman really useful](https://routinehub.co/shortcut/2443) (he also has an [accompanying post here too](https://medium.com/@jakebathman/setting-up-a-slack-app-for-use-with-ios-shortcuts-e8e16b15d0f3)). His Shortcut let's you put in a custom text status each time, but as I just wanted to set a specific one each time, I cut a few of the steps out, and now mine looks like this, with a step above this which uses text to set my `SlackOAuthToken`.

{% include modules/image-trio.html url1="/assets/blog/focuswork-d.PNG" url2="/assets/blog/focuswork-e.PNG" url3="/assets/blog/focuswork-f.PNG" description="Using variables and dictionary to set a specific slack status" %}

## Adding to my Discovery playlist

My memory iiiiiis not great, and to help with that I’ve always had a habit of writing down songs I like as I hear them. A personal torture for me is waking up after being somewhere, remembering very clearly I heard a new/great/nostalgic song I liked, but having only maybe a melody of it I will never, ever be able to google and find. The problem before is I’d have this huge list of songs in Things, which I then had to look up in Spotify to play them. With this Shortcut, I’m able to bypass that list and add songs I hear directly to a Discovery playlist. I then have another Shortcut to play this playlist, ordering songs by oldest to newest, so I’m not just replaying the same songs.

#### Shortcut steps

1. Let’s me enter a search query
2. Shows me a list of matching song results
3. I can select as many matches as I want
4. Selected songs are added to my Discovery playlist

{% include modules/image-layouts.html url="/assets/blog/discovery.PNG" description="An example using an art marker (1) and the level of detail in the capture putting a head(2) and a statue (3) onto a desk" %}

## Facetime Roulette

Important background context on this one — I find staying in touch with people I don’t see regularly really challenging. I’ve never been great at it, but living in a timezone 11 hours ahead has made it much harder. Part of it is I detest anything that makes something that’s not work feel like work. So the idea of putting a call with a close friend in the calendar so we don’t forget to do it I avoid like the plague. Facetime Roulette is actually an idea for an app I had ages ago, and although it doesn’t have everything (ideally I’d want to bias the roulette to people I hadn’t called in ages etc), this shortcut gets me most of the way there. I’m going to use this for a few months, and if it hold the magical appeal I think having a roulette layer to staying in touch with friends will have, I’ll develop the concept out more into an app.

#### Shortcut steps

1. Grabs a specific contact group
2. Orders it by random
3. Limits the selection to one
4. FaceTimes that lucky roulette winner

{% include modules/image-layouts.html url="/assets/blog/facetime-roulette.PNG" %}

## Further play

There's a few other Shortcuts I'm playing with at the moment, but haven't got quite right yet. All solving the big problems in life — fade out the nursery light and fade in white noise, triggering the office logo to do a rainbow loop on a launch — but I'll keep tinkering and share them when they're done. If you're interested in creating your own, the best places I found were the [Shortcuts subreddit](https://www.reddit.com/r/shortcuts/), and this [Shortcuts Gallery](https://shortcutsgallery.com). Both buzzing with hobbyist creators, and also very eager to answer questions — enjoy 🙂.
