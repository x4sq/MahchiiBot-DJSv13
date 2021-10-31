import { Client } from "discord.js";

export default (client: Client) => {
    const statusOptions = [
        'hello',
        'world',
        'test'
    ]
    let counter = 0

    const updateStatus = () => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        })

        if(++counter >= statusOptions.length){
            counter = 0
        }
        setTimeout(updateStatus, 10000)
    }
    updateStatus()
}

export const config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'Status changer'
}