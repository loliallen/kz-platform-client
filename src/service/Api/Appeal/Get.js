import config from "./config"

export default async (id=null, category=null, status=null) => {
    let response = await fetch(config.path+"get", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ id, category, status})
    })

    if(response.ok)
        return await response.json()
    throw new Error("Some error happend")
}