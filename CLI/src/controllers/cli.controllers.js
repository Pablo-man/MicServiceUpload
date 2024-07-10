export const listImages = async (req, res)=>{
    const response = await fetch(`http://localhost:9000/list`)
    const data = await response.json()
    const keys = data.map(file => file.Key);
    const imagesWithUrls = [];

    for (const key of keys) {
        const url = await fetch(`http://localhost:9000/list/URL/${key}`)
        const data = await url.json()
        imagesWithUrls.push({ key, data });
    }
    res.render('list', {data: imagesWithUrls})
}