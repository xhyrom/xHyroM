<p align="center">
    <!-- <img src="https://avatars.githubusercontent.com/u/56601352" width="192" alt="hyro's pfp" /> -->
    <h1 align="center">Hi, my name is xHyroM 👋</h1>
</p>

I'm a programmer. I work on a couple of open source projects, but also closed source projects. I work on projects like [Mr. Infinity](https://discord.com/oauth2/authorize?client_id=720321585625694239&scope=bot%20applications.commands&permissions=8&redirect_uri=https://blobs.gq/imanager&prompt=consent&response_type=code), [GCommands](https://github.com/Garlic-Team/GCommands), [Muploader](https://github.com/xHyroM/Muploder), [Roles Bot](https://github.com/xHyroM/roles-bot) and many more.  
I'll be glad if you take a look at my github 😀👀.

___
**Data**

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/base.svg">

___

**[📰 Recent activity](https://github.com/xHyroM)**
* ⏺️ Created new branch fix/types/add-missing-websocket-types in [xHyroM/bun](https://github.com/xHyroM/bun)
* ➡️ Pushed 24 commits in [xHyroM/bun](https://github.com/xHyroM/bun) on branch `main`
  * [#1405158](https://github.com/xHyroM/bun/commit/1405158) Updated typo in example (#573)

Changed deocder to decoder
  * [#d6d8c0b](https://github.com/xHyroM/bun/commit/d6d8c0b) Fixes https://github.com/oven-sh/bun/issues/561
  * [#d9491fe](https://github.com/xHyroM/bun/commit/d9491fe) [js] Include TypedArray type name for empty arrays
  * [#3609063](https://github.com/xHyroM/bun/commit/3609063) [js] When `console.log` typed arrays, include the type name and limit printed count to 512
  * [#7904f49](https://github.com/xHyroM/bun/commit/7904f49) Fixes https://github.com/oven-sh/bun/issues/229
  * [#d35ca94](https://github.com/xHyroM/bun/commit/d35ca94) Bump zig build
  * [#a20a341](https://github.com/xHyroM/bun/commit/a20a341) Move symbol
  * [#7381c33](https://github.com/xHyroM/bun/commit/7381c33) Run prettier
  * [#1091ee2](https://github.com/xHyroM/bun/commit/1091ee2) Fix broken build
  * [#b79dd18](https://github.com/xHyroM/bun/commit/b79dd18) [bun wiptest] Fix copy
  * [#3abfc35](https://github.com/xHyroM/bun/commit/3abfc35) add depd browser polyfill (#517)
  * [#7199263](https://github.com/xHyroM/bun/commit/7199263) Fix macOS build (#525)

* style: remove some trailing whitespace

* docs: make `identifier-cache` _before_ `jsc`

Running them the other way around results in a failed build.

* docs: `npm i` in both `test/snippets` _and_ `test/scripts`

`test/scripts` has node packages as well. If they aren&#39;t installed, then
some of the tests fail to start.

* docs: add `rust` to list of homebrew packages

One of the dependencies tries to run `cargo`, and will fail the build if
it can&#39;t. The `cargo` command is provided by the `rust` brew package.

* docs: clean up section on macOS code signing

This requirement applies to _all_ macOS builds, not just those on Apple
Silicon, and also had some slightly confusing wording.

* build: remove leading whitespace from flags

This leading whitespace was making my system treat the argument as a
file with name ` -L$(LLVM_PREFIX)/lib` (leading whitespace included),
instead of as a library path argument.

* build: try llvm@13 first, then fall back on bare llvm

The macOS instructions say to install `llvm@13`, which has a different
path than the bare `llvm` install (`brew --prefix llvm@13` != `brew
--prefix llvm`). This patch takes a slightly smarter approach:

1. If the user defined `LLVM_PREFIX` and it points to a valid path on
   disk, use that.
2. If `LLVM_PREFIX` is NOT a valid path, try setting it to the `llvm@13`
   path.
3. If it&#39;s STILL not a valid path, try the plain `llvm` path
4. If it&#39;s STILL not valid, set it to a user-friendly error.

There might be a better solution for doing this, I&#39;m not well-versed in
Makefile syntax, but it&#39;s at least slightly better than it was before.

* fix(build): update cast signature

`std.math.cast` was changed in 0e6285c8fc31ff866df96847fe34e660da38b4a9.
It used to throw if the cast would overflow, but now it returns `null`
instead.
  * [#90ff529](https://github.com/xHyroM/bun/commit/90ff529) Merge pull request #544 from xHyroM/chore/update-templates
  * [#5a8b3b8](https://github.com/xHyroM/bun/commit/5a8b3b8) Merge pull request #464 from dkarter/main

fix: remove unnecessary quotes in commit message
  * [#418972b](https://github.com/xHyroM/bun/commit/418972b) Update GitHub URL to match new repo URL  (#547)

* Update repo URLs

* GitHub URL update

* Revert accidental URL changes
  * [#c1d4917](https://github.com/xHyroM/bun/commit/c1d4917) chore(feature-request): change feature request to enhancement
  * [#65d6e28](https://github.com/xHyroM/bun/commit/65d6e28) chore(api-ref-docs): change doc to documentation
  * [#3c435f7](https://github.com/xHyroM/bun/commit/3c435f7) chore(bug-report): add label bug, need repro
  * [#659c3e0](https://github.com/xHyroM/bun/commit/659c3e0) chore: disable blank issues, add discord contact link
  * [#b0760bb](https://github.com/xHyroM/bun/commit/b0760bb) fix: remove unnecessary quotes in commit message

These quotes are not necessary and appear literally in the commit
* 🔍 Reviewed [#577 hono example with typescript](https://github.com/oven-sh/bun/pull/577) in [oven-sh/bun](https://github.com/oven-sh/bun)
* 💬 Commented on [#261 When using `bun add some-package` creates a package.json file, it lacks name and version property defaults](https://github.com/oven-sh/bun/issues/261) from [oven-sh/bun](https://github.com/oven-sh/bun)
* ➡️ Pushed 1 commit in [xHyroM/setup-bun](https://github.com/xHyroM/setup-bun) on branch `main`
  * [#f482eca](https://github.com/xHyroM/setup-bun/commit/f482eca) chore: workflow


___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/isocalendar.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/languages.svg">

___

<img src="https://github.com/xHyroM/xHyroM/blob/master/.cache/achievements.svg">

___
