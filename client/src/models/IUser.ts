export interface IFollowers {
    type: string
    ref: string
}
export interface IFollowing {
    type: string
    ref: string
}
export interface ISaved {
    type: string
    ref: string
}
export interface IUser {
    username: string
    email: string
    password: string
    updatedAt: string
    createdAt: string
    status: string
    avatar: string
    fullname: string
    website: string
    aboutMe: string
    mobile: string
    role: string
    gender: string
    address: string
    followers: IFollowers[]
    following: IFollowing[]
    saved: ISaved[]
    _id: string
}