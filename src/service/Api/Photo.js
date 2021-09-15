import { BASENAME } from "./config";
const createPhoto = async (data) => {
    let res = await fetch(`${BASENAME}upload.photoext`, {
        method: "POST",
        body: data,
    });

    if (res.ok) return await res.json();
    throw new Error("Error while creating url for photo");
};

export default {
    create: createPhoto,
};
