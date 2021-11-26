import { authActions, authThunks } from './auth/actions'

export const allActions = {
    ...authActions,
    ...authThunks
}