import { commonApi } from "./CommonApi"
import { base_url } from "./base_url"

// to get request
export const togetUsersApi = async()=>{
    return await commonApi("GET",`${base_url}`,"")
}
// to delete resposne 

export const toDeleteResponse = async(id)=>{
    return await commonApi("DELETE",`${base_url}/${id}`,{})
}

// to get single info

export const singleInfo = async(id)=>{
    return await commonApi("GET",`${base_url}/${id}`,"")
}