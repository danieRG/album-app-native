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

export const loadAlbumDetail = async(id) => {

    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`,{
        params:{
            _limit: 30
        }
    });
    
    return  photos.data;
}

export const loadImageDetail = async(id) => {
    const image = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    return image.data;
}