import { RequestFunctionParams } from 'yapi-to-typescript'
import axios from './axioshttp'
import { shopviewLauncherApi } from "./../service/ShopViewAPI"

export default async function request<TResponseData>(payload: RequestFunctionParams): Promise<TResponseData> {
  const formData = new FormData()
  const data = payload.hasFileData ? formData : payload.data
  if (payload.hasFileData) {
    Object.entries(payload.fileData).forEach(([key, value]) => formData.append(key, value))
    Object.entries(payload.data).forEach(([key, value]) => formData.append(key, JSON.stringify(value)))
  }
  let baseURL = shopviewLauncherApi.environment === "Product" ? "https://api.shopviewer.com" : "https://api-test.shopviewer.com"
  return axios.request({
    baseURL,
    url: payload.path,
    method: payload.method,
    data,
    params: payload.method === 'GET' ? payload.data : undefined,
    withCredentials: true,
    headers: {
      //@ts-expect-error
      'Content-Type': payload.hasFileData ? 'multipart/form-data' : undefined,
    },
  })
}
