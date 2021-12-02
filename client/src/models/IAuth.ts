import { IUser } from "./IUser";

export interface IAuth {
    msg?: string
    user: IUser
    access_token?: string
}