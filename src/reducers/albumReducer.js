import { types } from "../types/types";

const initialState = {
    albumList: [],
    albumDetail: [],
    imageDetail: {}
}

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALBUM_LIST:
            return {
                ...state,
                albumList: [...action.payload]
            }
        case types.SET_ALBUM_DETAIL:
            return {
                ...state,
                albumDetail: [...action.payload]
            }

        case types.SET_IMAGE_DETAIL:
            return {
                ...state,
                imageDetail: { ...action.payload }
            }

        default:
            return state;
    }
}