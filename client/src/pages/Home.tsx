import { Avatar } from "../components/Avatar"
import { PostModal } from "../components/PostModal"
import { useAppSelector } from "../hooks/useAppSelector"

export const Home: React.FC = () => {
    const { avatar, username } = useAppSelector(state => state.authReducer.user)

    return (
        <div>
            <div className='posts_content'>
                <div className='input_post-content'>
                    <Avatar url={avatar} size='medium' />
                    <button>{username}, add your post</button>
                </div>
                <PostModal />
            </div>

            <div className='suggestions_content'>

            </div>
        </div>
    )
}