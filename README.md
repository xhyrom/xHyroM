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
* ➡️ Pushed 117 commits in [xHyroM/bun](https://github.com/xHyroM/bun) on branch `main`
  * [#bcad0d4](https://github.com/xHyroM/bun/commit/bcad0d4) Downgrade Ubuntu used in `Dockerfile` to hopefully reduce glibc requirement to 2.27
  * [#9ab63dc](https://github.com/xHyroM/bun/commit/9ab63dc) [bun install] Forgot to commit `isCI` function
  * [#e79ed4f](https://github.com/xHyroM/bun/commit/e79ed4f) fix printing message for thrown non-error objects (#764)

* fix printing message for thrown non-error objects

* fine tuning error formatting

* more fine tuning error formatting
  * [#b897ad3](https://github.com/xHyroM/bun/commit/b897ad3) [bun install] Implement `--no-verify` flag to skip verifying integrity of downloaded packages
  * [#daed2a7](https://github.com/xHyroM/bun/commit/daed2a7) [bun install] Rename `skip_verify` -&gt; `skip_verify_installed_version_number`
  * [#0a5470e](https://github.com/xHyroM/bun/commit/0a5470e) [bun install] Implement `--no-progress` to disable the progress bar
  * [#a02b2d1](https://github.com/xHyroM/bun/commit/a02b2d1) [bun install] Improve performance of integrity hashing

By using optimized BoringSSL implementations
  * [#0cc88b8](https://github.com/xHyroM/bun/commit/0cc88b8) Bumped hono version number (#746)

* Bumped hono version number

* Changed bun-types version
  * [#c4fbcae](https://github.com/xHyroM/bun/commit/c4fbcae) fixed some licenses in README (#758)

* fixed some licenses

* typo
  * [#a85413c](https://github.com/xHyroM/bun/commit/a85413c) fix scoped packages name resolution (#760)
  * [#24a5f9b](https://github.com/xHyroM/bun/commit/24a5f9b) test(wiptest): add a way to test wiptest (#699)

This adds a really basic test runner that will execute test files using
`bun wiptest` and compare the output to make sure it&#39;s correct. It could
definitely be improved, especially in the speed department, but it&#39;s at
least functional now, which is better than we had before!
  * [#e9f3768](https://github.com/xHyroM/bun/commit/e9f3768) docs: fix documentation of `atob` and `btoa` (#748)

These function are confusingly named. `btoa` converts &#34;Binary&#34; to Ascii
by encoding the input using base64. `atob` reverses that process by
base64 decoding the Ascii input into a &#34;Binary&#34; output.

The names come from the Unix utilities with the same names, which
&#34;converts a binary file to ascii for transmission over a telephone line&#34;
(https://www.unix.com/man-page/minix/1/btoa/)

See:
- https://developer.mozilla.org/en-US/docs/Web/API/atob
- https://developer.mozilla.org/en-US/docs/Web/API/btoa
- https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa-dev

Note: the actual implementation of `btoa` and `atob` are correct, but
the docs were backwards.
  * [#3c0f18f](https://github.com/xHyroM/bun/commit/3c0f18f) fix/clean-up-bun-error (#753)

* Fixing TypeScript errors in bun-error package

* Fixing import path

* Removing unused &#39;isClient&#39; prop from AsyncSourceLines

* PR feedback
  * [#f7e9b91](https://github.com/xHyroM/bun/commit/f7e9b91) [parser] Fix symbol collision with require

Fixes https://github.com/oven-sh/bun/issues/674
Fixes https://github.com/oven-sh/bun/issues/382
  * [#e724683](https://github.com/xHyroM/bun/commit/e724683) Add a TLA test
  * [#fd4a210](https://github.com/xHyroM/bun/commit/fd4a210) [bun.js] Fix non-ascii latin1 string handling in console.log

Closes https://github.com/oven-sh/bun/issues/738
Closes https://github.com/oven-sh/bun/issues/737
  * [#9a7874a](https://github.com/xHyroM/bun/commit/9a7874a) minor edit: Makefile (#672)

* minor edit: Makefile

Fixed a suggested command when ninja isn&#39;t found to the correct package name

* Makefile: minor edit

Ninja build has different names in different package managers. This handles both known instances.

* Makefile: ninja package name suggestion

When checking requirements, ninja build has a different name for brew and ubuntu/debian. This handles both.
  * [#5c2ec9c](https://github.com/xHyroM/bun/commit/5c2ec9c) fix(README): Remove unused troubleshooting link (#736)
  * [#5b24896](https://github.com/xHyroM/bun/commit/5b24896) docs: Added readme file for `blank template`  (#727)

* Added  readme file for blank template

* Removed `Special note` section
  * [#65027bf](https://github.com/xHyroM/bun/commit/65027bf) chore(workflows): dont run on forks (#734)

* build:(landing) automated website build

* Revert &#34;build:(landing) automated website build&#34;

This reverts commit ddee8485fd8b76160962c410b885e17aaff95b4e.

* workflows(bun-dockerhub): dont run on forks

* chore(bun-landing): update

dont run on forks
fix commit changes

* workflows(bun): dont run on forks

Co-authored-by: xHyroM &lt;xHyroM@users.noreply.github.com&gt;
* ➡️ Pushed 1 commit in [xHyroM/covid19-stats](https://github.com/xHyroM/covid19-stats) on branch `master`
  * [#b8967d3](https://github.com/xHyroM/covid19-stats/commit/b8967d3) 2022/07/25 stats
* #️⃣ Opened [#536 djs v14 support](https://github.com/Garlic-Team/gcommands/issues/536) in [Garlic-Team/gcommands](https://github.com/Garlic-Team/gcommands)
* ➡️ Pushed 1 commit in [Garlic-Team/docs](https://github.com/Garlic-Team/docs) on branch `main`
  * [#fb0bcef](https://github.com/Garlic-Team/docs/commit/fb0bcef) Docs build for branch next: b809b6c89aaef0b101e29e071bed4d16d2f74960
* ➡️ Pushed 2 commits in [Garlic-Team/gcommands](https://github.com/Garlic-Team/gcommands) on branch `next`
  * [#b809b6c](https://github.com/Garlic-Team/gcommands/commit/b809b6c) chore(deps): update dependency @prisma/client to v4.1.0

chore(deps): update dependency @prisma/client to v4.1.0
  * [#d2950d2](https://github.com/Garlic-Team/gcommands/commit/d2950d2) chore(deps): update dependency @prisma/client to v4.1.0


___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/isocalendar.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/languages.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/achievements.svg">

___
