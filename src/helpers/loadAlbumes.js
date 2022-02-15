import axios from "axios"

export const loadAlbumes = async() => {
    const albumesArr = [];
    const albumes = await axios.get("https://jsonplaceholder.typicode.com/albums", {
        params:{
            _limit: 20
        }
    })
        
    albumes.data.forEach(album => {
        albumesArr.push(album);
    });

    return albumesArr;
}