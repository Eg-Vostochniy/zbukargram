import { authActions, authThunks } from './auth/actions'
import { postsActions, postsThunks } from './posts/actions'

export const allActions = {
    ...authActions,
    ...authThunks,
    ...postsActions,
    ...postsThunks
}