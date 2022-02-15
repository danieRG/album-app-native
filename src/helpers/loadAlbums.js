import axios from "axios"

export const loadAlbums = async() => {
    const albumsArr = [];
    const albums = await axios.get("https://jsonplaceholder.typicode.com/albums", {
        params:{
            _limit: 20
        }
    })
        
    albums.data.forEach(album => {
        albumsArr.push(album);
    });

    return albumsArr;
}