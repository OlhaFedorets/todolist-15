import { setAppErrorAC, setAppStatusAC } from "@/app/app-slice.ts"
import { Dispatch } from "@reduxjs/toolkit"
import { BaseResponse } from "@/common/types"

export const handleServerAppError = <T>(data: BaseResponse<T>, dispatch: Dispatch) => {
  dispatch(setAppErrorAC({error: data.messages.length ? data.messages[0] : "Some error occurred"}))
  dispatch(setAppStatusAC({ status: "failed" }))
}