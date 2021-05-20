import config from "./config"

export const get = async () => {
    let response = await fetch(config.path+"get", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}
