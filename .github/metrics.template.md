## 👋 Hello, I'm {{ LOGIN }}

Hey, my name is Jozef Steinhübl, alias Hyro. I'm a 14 years old developer and computer enthusiast doing things that come to my mind. Most of my work is open-source and available here.

You can read more about me on [my website](https://xhyrom.dev/about) or join my [discord server](https://discord.gg/kFPKmEKeMS)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S0KA3I5)

<%- await embed(`base`, { base: "header, activity, community, repositories, metadata" }) %>

<details>	
    <summary><b>🗓️ My Calendar</b></summary>
    <%- await embed(`isocalendar`, { isocalendar: true, isocalendar_duration: "half-year" }) %>
</details>

<details>	
    <summary><b>🔥 My Streak</b></summary>
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=xhyrom&theme=dark" alt="streak" />
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
    <%- await embed(`achievements`, { achievements: true, achievements_threshold: "C", achievements_display: "compact" }) %>
    <details>
        <summary><b>Detailed</b></summary>
        <%- await embed(`achievements_detailed`, { achievements: true, achievements_threshold: "C", achievements_display: "detailed" }) %>
    </details>
</details>
