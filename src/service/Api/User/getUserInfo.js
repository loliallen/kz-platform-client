import config from "./config"

export default async (id) => {
    let response = await fetch(config.path+"get", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({id})
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}
