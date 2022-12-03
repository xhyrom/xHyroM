const applications = await (await fetch('https://raw.githubusercontent.com/xHyroM/discord-list/master/activities/activities.json')).json()

export default {
    appIds: applications.map((app: any) => `"${app.id}"`)
}
