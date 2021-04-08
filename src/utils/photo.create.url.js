import Api from "../service/Api"

const createPhoto = async (file) => {
    var fd = new FormData()
    fd.append("var_file", file)
    let data = await Api.Photo.create(fd)
    return data.url
}
