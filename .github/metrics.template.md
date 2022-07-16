<p align="center">
    <!-- <img src="https://avatars.githubusercontent.com/u/56601352" width="192" alt="hyro's pfp" /> -->
    <h1 align="center">Hi, my name is {{ LOGIN }} 👋</h1>
</p>

I'm a programmer. I work on a couple of open source projects, but also closed source projects. I work on projects like [Mr. Infinity](https://discord.com/oauth2/authorize?client_id=720321585625694239&scope=bot%20applications.commands&permissions=8&redirect_uri=https://blobs.gq/imanager&prompt=consent&response_type=code), [GCommands](https://github.com/Garlic-Team/GCommands), [Muploader](https://github.com/xHyroM/Muploader), [Roles Bot](https://github.com/xHyroM/roles-bot) and many more.  
I'll be glad if you take a look at my github 😀👀.

___
**Data**

<%- await embed(`base`, {base:"activity, community, repositories"}) %>

___

<%- await include(`partials/activity.ejs`) %>

___

<%- await embed(`isocalendar`, {isocalendar:true, isocalendar_duration:"half-year", config_display:"large"}) %>

___

<%- await embed(`languages`, {languages:true, languages_details:"percentage, bytes-size", config_display:"large"}) %>

___

<%- await embed(`achievements`, { achievements: true, achievements_secrets: true, achievements_threshold: "C" }) %>

___
