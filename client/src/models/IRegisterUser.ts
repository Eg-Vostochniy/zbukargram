import { ILoginUser } from './ILoginUser'

export interface IRegisterUser extends ILoginUser {
    username: string
    fullname: string
    gender: string
    cf_password: string
}