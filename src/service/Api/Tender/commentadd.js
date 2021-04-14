import config from "./config"

export default async (id, text, parent, token) => {
    let response = await fetch(config.path+"commentadd", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({id, text, parent: parent, token})
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}
