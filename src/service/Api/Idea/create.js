import config from "./config"

export default async (data) => {
    let response = await fetch(config.path+"create", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}
