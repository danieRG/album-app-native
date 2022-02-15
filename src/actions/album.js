import { loadAlbums, loadAlbumDetail, loadImageDetail } from "../helpers/loadAlbums";
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

export const setAlbumDetail = (albumDetail) => ({

    type: types.SET_ALBUM_DETAIL,
    payload: albumDetail
})


export const LoadingAlbumDetail = (id) => {
    return async (dispatch) => {
        const details = await loadAlbumDetail(id);
        dispatch(setAlbumDetail(details));
    }
}

export const setImageDetail = (imageDetail) => ({

    type: types.SET_IMAGE_DETAIL,
    payload: imageDetail
})


export const LoadingImageDetail = (id) => {
    return async (dispatch) => {
        const imageDetail = await loadImageDetail(id);
        dispatch(setImageDetail(imageDetail));
    }
}