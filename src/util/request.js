import {get, post,put,del,patch} from './service'

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

export const updateFoodApi = data => {
    return put(
        {
            url: "food",
            data: data
        }
    )
}
export const delFoodApi = data => {
    return del(
        {
            url: "food/"+data
        }
    )
}
export const addFoodApi = data => {
    return post(
        {
            url: "food",
            data: data
        }
    )
}