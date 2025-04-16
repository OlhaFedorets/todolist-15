import { setAppErrorAC, setAppStatusAC } from "@/app/app-slice.ts"
import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"

export const handleServerNetworkError = (error: unknown, dispatch: Dispatch) => {

  let errorMessage

  // 1. Аксиос ошибки (ошибки сервера)
  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error.message
  }
  // 2. Нативные ошибки (ошибки js)
  else if (error instanceof Error) {
    errorMessage = error.message
  } else {
    errorMessage = JSON.stringify(error)
  }

  dispatch(setAppErrorAC({error: errorMessage}))
  dispatch(setAppStatusAC({ status: "failed" }))
}