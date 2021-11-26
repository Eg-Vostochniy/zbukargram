import { ReturnActionsTypes } from '../index'
import { IAlert } from "../../models/IAlert"
import { ALERT } from "./types"

export const alertActions = {
    alert: (payload: IAlert) => { return { type: ALERT, payload } as const }
}

export type AlertAC = ReturnActionsTypes<typeof alertActions>