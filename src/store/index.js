import {createStore} from 'vuex'
import {autocompleteEmits} from "element-plus";
import number from './state/num.state.js'

export default createStore({
    //数据较多时,分模块
    modules: {
        number
    }
})
