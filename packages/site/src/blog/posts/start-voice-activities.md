---
title: 'Start voice activities'
description: How to start voice activities
date: 2022-04-14
templateEngine: njk,md
---

I'm sure you've heard of [voice activities](https://support.discord.com/hc/en-us/articles/4422142836759-Boosted-Activities-Experiment-). You've wanted to play them on your own server at some point, and that's why you had to use a bot. Here I'll show you how to be able to run the latest activities without using a bot.  

It's very simple. Just open the console with `CTRL + SHIFT + I` and then paste this
code into the console:

```js
var appIds = [{{ other.appIds | safe }}]

window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getEnabledAppIds !== undefined) {return m.default.getEnabledAppIds = () => appIds}}}]);
```

> Application Ids are only updated when this page is built, so if you are sure there is a new activity you can copy the id in [this table](https://github.com/xHyroM/discord-activities/blob/master/activities.md)

Then all you have to do is go to the voice channel, click on the rocket and start playing. Other people can already join using the Join Activity button.