import {ElMessageBox} from "element-plus";


export const confirmBox = (title, confirmHandler, cancelHandler) => {
    ElMessageBox.confirm(
        title,
        '删除',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(confirmHandler).catch(cancelHandler)
}
