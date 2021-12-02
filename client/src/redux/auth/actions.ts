import { IAuth } from './../../models/IAuth'
import { AlertAC } from './../alert/actions'
import { ReturnActionsTypes, ReturnThunksTypes } from './../index'
import { Dispatch } from "redux"
import { ILoginUser } from "../../models/ILoginUser"
import { IRegisterUser } from "../../models/IRegisterUser"
import { AUTH } from "./types"
import { postAPI, getAPI } from '../../utils/fetchData'
import { alertActions } from '../alert/actions'
import { AxiosResponse } from 'axios'

export const authActions = {
    auth: (payload: IAuth) => { return { type: AUTH, payload } as const }
}

export type AuthAC = ReturnActionsTypes<typeof authActions>

export const authThunks = {
    register: (data: IRegisterUser): ReturnThunksTypes<AuthAC> =>
        async (dispatch: Dispatch<AuthAC | AlertAC>) => {
            try {
                dispatch(alertActions.alert({ loading: true }))

                const res: AxiosResponse<IAuth> = await postAPI('register', data)
                res.data.access_token && localStorage.setItem('token', res.data.access_token)
                dispatch(authActions.auth(res.data))

                dispatch(alertActions.alert({ success: res.data.msg }))
            } catch (error) {
                dispatch(alertActions.alert({ error: (error as Error).message }))
            }
        },
    login: (data: ILoginUser): ReturnThunksTypes<AuthAC> =>
        async (dispatch: Dispatch<AuthAC | AlertAC>) => {
            try {
                dispatch(alertActions.alert({ loading: true }))

                const res: AxiosResponse<IAuth> = await postAPI('login', data)
                res.data.access_token && localStorage.setItem('token', res.data.access_token)
                dispatch(authActions.auth(res.data))

                dispatch(alertActions.alert({ success: res.data.msg }))
            } catch (error) {
                dispatch(alertActions.alert({ error: (error as Error).message }))
            }
        },
    logout: (): ReturnThunksTypes<AuthAC> => async (dispatch: Dispatch<AuthAC | AlertAC>) => {
        try {
            dispatch(alertActions.alert({ loading: true }))

            const res: AxiosResponse<IAuth> = await getAPI('logout')
            localStorage.removeItem('token')
            dispatch(authActions.auth({} as IAuth))

            dispatch(alertActions.alert({ success: res.data.msg }))
        } catch (error) {
            dispatch(alertActions.alert({ error: (error as Error).message }))
        }
    },
    verifyToken: (): ReturnThunksTypes<AuthAC> => async (dispatch: Dispatch) => {
        try {
            dispatch(alertActions.alert({ loading: true }))

            const res: AxiosResponse<IAuth> = await getAPI('verify_token')
            dispatch(authActions.auth(res.data))

            dispatch(alertActions.alert({ success: res.data.msg }))
        } catch (error) {
            dispatch(alertActions.alert({ error: (error as Error).message }))
        }
    }
}