import axios from 'axios'
import {ElLoading,ElMessage} from "element-plus";

let loading = null
//使用create创建axios实例
const service = axios.create({
    timeout: 8000,
    baseURL: "http://xxx",
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})

//请求之前的拦截器
service.interceptors.request.use(config => {
    loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
})
//响应拦截
service.interceptors.response.use(response => {
    loading.close()
    return response.data
},error => {
    loading.close()
    ElMessage.error({
        message:'接口异常',
        type:'error',
        duration:2000
    })
})