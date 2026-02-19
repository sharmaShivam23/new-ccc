import React from 'react'
import axios from "axios"

export const axiosInstance = axios.create({
   withCredentials: true,
})


export const apiConnect = (method , url , bodyData  , headers, params) => {

   return axiosInstance({
    method : `${method}`,
    url : `${url}`,
    data : bodyData ? bodyData : null,
    headers : headers ? headers : null,
    params : params ? params : null,
    withCredentials: true
   })
}