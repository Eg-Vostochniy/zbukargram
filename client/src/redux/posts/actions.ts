import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ReturnActionsTypes, ReturnThunksTypes } from './../index'
import { IPost, IReqPost, IResPost } from "../../models/IPost"
import { CREATE_POST, GET_POSTS } from "./types"
import { AlertAC, alertActions } from '../alert/actions';
import { postAPI } from '../../utils/fetchData';

export const postsActions = {
    getPosts: (payload: any) => { return { type: GET_POSTS, payload } as const },
    createPost: (payload: IPost) => { return { type: CREATE_POST, payload } as const }
}

export type PostsAC = ReturnActionsTypes<typeof postsActions>

export const postsThunks = {
    createPost: (data: IReqPost, token: string): ReturnThunksTypes<PostsAC> => async (dispatch: Dispatch<PostsAC | AlertAC>) => {
        try {
            dispatch(alertActions.alert({ loading: true }))

            const res: AxiosResponse<IResPost> = await postAPI('add_post', data, token)
            dispatch(postsActions.createPost(res.data.newPost))

            dispatch(alertActions.alert({ success: res.data.msg }))
        } catch (err) {
            dispatch(alertActions.alert({ error: (err as Error).message }))
        }
    }
}