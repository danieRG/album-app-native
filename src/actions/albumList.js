import { loadAlbums } from "../helpers/loadAlbums";
import { types } from "../types/types";

export const setAlbumList = (albumList) => ({
    type: types.SET_ALBUM_LIST,
    payload: albumList
})

export const startLoadingAlbumList = () => {
    return async (dispatch) => {
        const albums = await loadAlbums();
        dispatch(setAlbumList(albums));
    }
}