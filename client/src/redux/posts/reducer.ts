import { PostsAC } from "./actions"
import { CREATE_POST } from "./types"

const initialState = {
    msg: '',
    posts: []
}

export const postsReducer = (state = initialState, action: PostsAC) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }


        default: return state
    }
}