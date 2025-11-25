import { commonrequest } from "../commonrequest"
import {BASE_URL} from "../helper"



export const getUserAPI = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}`,"",header,"");
}

