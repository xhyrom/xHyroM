<p align="center">
    <!-- <img src="https://avatars.githubusercontent.com/u/56601352" width="192" alt="hyro's pfp" /> -->
    <h1 align="center">Hi, my name is xHyroM 👋</h1>
</p>

I'm a programmer. I work on a couple of open source projects, but also closed source projects. I work on projects like [Mr. Infinity](https://discord.com/oauth2/authorize?client_id=720321585625694239&scope=bot%20applications.commands&permissions=8&redirect_uri=https://blobs.gq/imanager&prompt=consent&response_type=code), [GCommands](https://github.com/Garlic-Team/GCommands), [Muploader](https://github.com/xHyroM/Muploader), [Roles Bot](https://github.com/xHyroM/roles-bot) and many more.  
I'll be glad if you take a look at my github 😀👀.

___
**Data**

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/base.svg">

___

**[📰 Recent activity](https://github.com/xHyroM)**
* ➡️ Pushed 10 commits in [xhyrom-forks/bun](https://github.com/xhyrom-forks/bun) on branch `main`
  * [#47a91e7](https://github.com/xhyrom-forks/bun/commit/47a91e7) Fix import path
  * [#f5c6875](https://github.com/xhyrom-forks/bun/commit/f5c6875) 38% faster `node:http`

Before:
```fish
❯ oha http://localhost:3000 -z 2s -c 20
Summary:
  Success rate:	1.0000
  Total:	2.0006 secs
  Slowest:	0.0095 secs
  Fastest:	0.0000 secs
  Average:	0.0003 secs
  Requests/sec:	69521.0420
```

After:
```
❯ oha http://localhost:3000 -z 2s -c 20
Summary:
  Success rate:	1.0000
  Total:	2.0005 secs
  Slowest:	0.0063 secs
  Fastest:	0.0000 secs
  Average:	0.0002 secs
  Requests/sec:	109119.8614
```

Code

```
const http = require(&#34;http&#34;);

const hostname = &#34;127.0.0.1&#34;;
const port = 3000;

const server = http.createServer((req, res) =&gt; {
  res.statusCode = 200;
  res.setHeader(&#34;Content-Type&#34;, &#34;text/plain&#34;);
  res.end(&#34;Hello World!&#34;);
});

server.listen(port, hostname, () =&gt; {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
  * [#eec11a6](https://github.com/xhyrom-forks/bun/commit/eec11a6) Don&#39;t transpile `readable-stream`
  * [#b95e660](https://github.com/xhyrom-forks/bun/commit/b95e660) Add a snippet for benchmarking EventEmitter vs EventTarget
  * [#6897372](https://github.com/xhyrom-forks/bun/commit/6897372) [misc] Reload internal JS modules in development without compiling
  * [#ee1d506](https://github.com/xhyrom-forks/bun/commit/ee1d506) Use `jsCast` because it&#39;s slightly faster
  * [#d620500](https://github.com/xhyrom-forks/bun/commit/d620500) [node compat] Don&#39;t throw `TypeError` for DOM constructors
  * [#65dd221](https://github.com/xhyrom-forks/bun/commit/65dd221) fix bun-tools location in macOSx zig instructions (#1124)
  * [#3d8bc14](https://github.com/xhyrom-forks/bun/commit/3d8bc14) Add native EventEmitter (#1123)

* Add native EventEmitter

* add listeners, listenerCount and eventNames

* add global functions

* add Object to EventEmitter conversion

* fix upon review
  * [#d8f40e0](https://github.com/xhyrom-forks/bun/commit/d8f40e0) [env loader] Don&#39;t panic when .env fails to load for unexpected reasons
* ➡️ Pushed 1 commit in [xhyrom-forks/bun](https://github.com/xhyrom-forks/bun) on branch `xHyroM/feat/implement-os`
  * [#138c89b](https://github.com/xhyrom-forks/bun/commit/138c89b) feat: finish getPriority implementation &amp; stats cpus()
* ➡️ Pushed 1 commit in [xhyrom-forks/bun](https://github.com/xhyrom-forks/bun) on branch `xHyroM/feat/implement-os`
  * [#fec5cf7](https://github.com/xhyrom-forks/bun/commit/fec5cf7) feat: implement cpus, not done
* 💬 Commented on [#1115 [WIP] feat: implement native os module](https://github.com/oven-sh/bun/issues/1115) from [oven-sh/bun](https://github.com/oven-sh/bun)
* ➡️ Pushed 1 commit in [xhyrom-forks/bun](https://github.com/xhyrom-forks/bun) on branch `xHyroM/feat/implement-os`
  * [#8270a22](https://github.com/xhyrom-forks/bun/commit/8270a22) feat: finish userInfo implementation


___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/isocalendar.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/languages.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/achievements.svg">

___
