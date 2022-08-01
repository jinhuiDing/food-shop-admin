import axios from 'axios'
import {ElLoading, ElMessage} from "element-plus";

let loading = null
//使用create创建axios实例
const service = axios.create({
    timeout: 8000,
    baseURL: "/api",
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
export const post = config => {
    return service({
        ...config,
        method: 'post',
        data: config.data,
        headers:
            {
                "Content-Type": "application/json"
            }

    })
}
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
    if (response.data.code !== 200) {
        ElMessage.error({
            message: response.data.msg || '接口返回错误',
            type: 'error',
            duration: 2000
        })
    }

    return response.data
}, error => {
    loading.close()
    ElMessage.error({
        message: '接口异常',
        type: 'error',
        duration: 2000
    })
})


export const get = config => {
    return service({
        ...config,
        method: 'get',
        params: config.data
    })
}

export const patch = config => {
    return service({
        ...config,
        method: 'patch',
        data: config.data,
        // transformRequest: [function (data) {
        //   let ret = ''
        //   for (let it in data) {
        //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //   }
        //   return ret
        // }],
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
export const del = config => {
    return service({
        ...config,
        method: 'delete',
        data: config.data,
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
export const put = config => {
    return service({
        ...config,
        method: 'put',
        params: config.data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}