import { types } from "../types/types";

const initialState = {
    albumList: []
}

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALBUM_LIST:
            return {
                ...state,
                albumList: [...action.payload]
            }
        default:
            return state;
    }
}