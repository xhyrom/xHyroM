const applications = await (await fetch('https://raw.githubusercontent.com/xHyroM/discord-activities/master/activities.json')).json()

export default {
    appIds: applications.map((app: any) => `"${app.id}"`)
}