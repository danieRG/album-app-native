import { loadAlbumes } from "../helpers/loadAlbumes";
import { types } from "../types/types";

export const setAlbumList = (albumList) => ({
    type: types.SET_ALBUM_LIST,
    payload: albumList
})

export const startLoadingAlbumList = () => {
    return async (dispatch) => {
        const albumes = await loadAlbumes();
        dispatch(setAlbumList(albumes));
    }
}