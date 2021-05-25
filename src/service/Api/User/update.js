import config from "./config"

export default async (token, data) => {
    if (data.name) {
        let response = await fetch(config.path+"setname", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ token, name: data.name })
        })
    }
    if (data.address) {
        let response = await fetch(config.path+"setaddress", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ token, address: data.address })
        })

    }
    if (data.phone) {
        let response = await fetch(config.path+"setphone", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ token, phone: data.phone })
        })

    }
    if (data.email) {
        let response = await fetch(config.path+"setemail", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ token, email: data.email })
        })
    }
    if (data.photo) {
        let response = await fetch(config.path+"setphoto", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ token, photo: data.photo })
        })
    }
}
