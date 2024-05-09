# Hiya, I'm Jozef Steinhübl 👋

I'm a 15-year-old computer enthusiast and student. I mainly work on the backend and am self-taught. I'm an open-source software creator and love experimenting with different programming languages and frameworks, including [`TypeScript`](https://www.typescriptlang.org/), [`Java`](http://java.net/), [`Astro`](https://astro.dev), and [`React`](https://react.dev), as well as a little bit of [`Lua`](https://lua.org), [`Go`](https://go.dev) and [`Rust`](https://rust-lang.org).

I've also worked with Linux, [Docker](https://docker.com), [MySQL](https://mysql.com), [Redis](https://redis.io) and more. If you want to reach me, you can do so through mail at [`lol@xhyrom.dev`](mailto:lol@xhyrom.dev) or on [Discord](https://discord.com/users/525316393768452098) (xhyrom, 525316393768452098). You can also take a look at my [website](https://xhyrom.dev) and [link tree](https://links.xhyrom.dev).

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S0KA3I5)

### 👀 Quick Statistics

<table>
    <tr>
        <td style="padding=0;width=50%;">
            <img align="center" style="padding=0;" src="https://github-readme-stats.vercel.app/api?username=xhyrom&title_color=FB8C00&text_color=ffffff&bg_color=151515&hide_border=true&hide_title=true&show_icons=true&count_private=true" alt="basic info" />
        </td>
        <td style="padding=0;width=50%;">
            <img align="center" style="padding=0;" src="https://github-readme-streak-stats.herokuapp.com/?user=xhyrom&theme=dark&hide_border=true" alt="streak" />
        </td>
    </tr>
</table>

<details>	
    <summary><b>🟣 Issues & PRs</b></summary>
    <%- await embed(`followup`, { followup: true }) %>
</details>

<details>	
    <summary><b>👅 Used Languages</b></summary>
    <%- await embed(`languages`, { languages: true, languages_details: "bytes-size, percentage", languages_skipped: "discord-datamining" }) %>
</details>

<details>	
    <summary><b>🏅 Achievements</b></summary>
    <%- await embed(`achievements`, { achievements: true, achievements_threshold: "C", achievements_display: "compact" }) %>
    <details>
        <summary><b>Detailed</b></summary>
        <%- await embed(`achievements_detailed`, { achievements: true, achievements_threshold: "C", achievements_display: "detailed" }) %>
    </details>
</details>