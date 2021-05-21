import config from "./config"

export default async (region_id = null) => {
    let response = await fetch(config.path+"get", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: region_id ? JSON.stringify({region: Number(region_id)}): null
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}