export interface IImgs {
    public_id: string
    url: string
}
export interface IReqPost {
    content: string
    imgs: IImgs[]
}
export interface IPost extends IReqPost {
    likes: []
    comments: []
    user: string
}
export interface IResPost {
    msg: string
    newPost: IPost
}