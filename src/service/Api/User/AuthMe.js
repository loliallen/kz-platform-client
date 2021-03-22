import config from "./config"

export default async ({token}) => {
    let response = await fetch(config.path+"get", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ token })
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}
