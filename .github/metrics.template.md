## 👋 Hello, I'm {{ LOGIN }}

My real name is Jozef Steinhübl and I live in Slovakia . I enjoy coding and spend a lot of time on it. I work on many things that are also open-source.

You can read more about me on [my website](https://xhyrom.dev/about) or join my [discord server](https://discord.gg/kFPKmEKeMS)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S0KA3I5)

<%- await embed(`base`, { base: "header, activity, community, repositories, metadata" }) %>

<details>	
    <summary><b>🗓️ My Calendar</b></summary>
    <%- await embed(`isocalendar`, { isocalendar: true, isocalendar_duration: "half-year" }) %>
</details>

<details>	
    <summary><b>🔥 My Streak</b></summary>
    <img src="https://streak-stats.demolab.com/?user=xHyroM&theme=dark&hide_border=true" alt="streak" />
</details>

<details>	
    <summary><b>🟣 Issues & PRs Analysis</b></summary>
    <%- await embed(`followup`, { followup: true }) %>
</details>

<details>	
    <summary><b>👅 Used Languages</b></summary>
    <%- await embed(`languages`, { languages: true, languages_details: "bytes-size, percentage", languages_skipped: "discord-datamining" }) %>
</details>

<details>	
    <summary><b>🏅 Achievements</b></summary>
    <%- await embed(`achievements`, { achievements: true, achievements_display: "compact" }) %>
</details>
