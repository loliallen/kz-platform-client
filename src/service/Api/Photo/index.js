import config from "./config"

const Upload = async (fd) => {
    let res = await fetch(config.path, {
        method: "POST",
        body: fd
    })
    if (res.ok)
        return res.json()
    throw new Error('Cannot upload photo')
}   