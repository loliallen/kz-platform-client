import config from "./config"

export default async ({login, password}) => {
    let response = await fetch(config.path+"reg", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email: login, password })
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}