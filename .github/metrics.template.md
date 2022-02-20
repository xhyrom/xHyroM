<p align="center">
    <h1 align="center">Welcome to my github profile</h1>
    <img style="margin-left: auto; margin-right: auto; display: block;" src="https://avatars.githubusercontent.com/u/64907994" width="192" />
    <h1 align="center">My name is {{ LOGIN }} 👋</h1>
</p>

I joined GitHub on `{{ f.date(REGISTRATION_DATE, {dateStyle:"short"}) }}`.  
I contributed to `{{ REPOSITORIES_CONTRIBUTED_TO }}` repositories and made `{{ COMMITS }}` commits.  

___

<%- await embed(`base`, {base:"activity, community, repositories"}) %>

___

<%- await include(`partials/activity.ejs`) %>

___

<%- await embed(`isocalendar`, {isocalendar:true, isocalendar_duration:"full-year", config_display:"large"}) %>

___

<%- await embed(`languages`, {languages:true, languages_details:"percentage, bytes-size", config_display:"large"}) %>

___

<%- await include(`partials/achievements.ejs`) %>

___