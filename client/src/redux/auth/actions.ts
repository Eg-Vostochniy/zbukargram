import { AlertAC } from './../alert/actions';
import { ReturnActionsTypes } from './../index'
import { Dispatch } from "redux"
import { IAuth } from "../../models/IAuth"
import { ILoginUser } from "../../models/ILoginUser"
import { IRegisterUser } from "../../models/IRegisterUser"
import { AUTH } from "./types"
import { postAPI } from '../../utils/fetchData'
import { alertActions } from '../alert/actions'

export const authActions = {
    auth: (payload: IAuth) => { return { type: AUTH, payload } as const }
}

export type AuthAC = ReturnActionsTypes<typeof authActions>

export const authThunks = {
    register: (data: IRegisterUser) => async (dispatch: Dispatch<AuthAC | AlertAC>) => {
        try {
            dispatch(alertActions.alert({ loading: true }))
            const res = await postAPI('register', data)
            dispatch(authActions.auth(res.data))
            dispatch(alertActions.alert({ success: res.data.msg }))
        } catch (error) {
            dispatch(alertActions.alert({ error: (error as Error).message }))
        }
    },
    login: (data: ILoginUser) => async (dispatch: Dispatch<AuthAC | AlertAC>) => {
        try {
            dispatch(alertActions.alert({ loading: true }))
            const res = await postAPI('login', data)
            localStorage.setItem('token', res.data.access_token)
            dispatch(authActions.auth(res.data))
            dispatch(alertActions.alert({ success: res.data.msg }))
        } catch (error) {
            dispatch(alertActions.alert({ error: (error as Error).message }))
        }
    },
    logout: (token: string) => async (dispatch: Dispatch<AuthAC>) => {

    }
}