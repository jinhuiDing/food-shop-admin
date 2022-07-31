import {get, post} from './service'

export const loginApi = data => {
    return post({
        url: '/login',
        data: data
    })
}

export const getFoodApi = data => {
    return get({
        url: '/food',
        data
    })
}