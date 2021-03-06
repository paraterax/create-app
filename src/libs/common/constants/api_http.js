const CALL_API_HTTP = "CALL_API_HTTP"
const CALL_API_HTTP_START = "CALL_API_HTTP_START"
const CALL_API_HTTP_DONE = "CALL_API_HTTP_DONE"
const CALL_API_HTTP_FAIL = "CALL_API_HTTP_FAIL"

const DOWNLOAD = "CALL_API_HTTP_DOWNLOAD"

const UPLOAD = "CALL_API_HTTP_UPLOAD"
const UPLOAD_START = "CALL_API_HTTP_UPLOAD_START"
const UPLOAD_FAIL = "CALL_API_HTTP_UPLOAD_FAIL"
const UPLOAD_PROGRESS = "CALL_API_HTTP_UPLOAD_PROGRESS"
const UPLOAD_SUCCESS = "CALL_API_HTTP_UPLOAD_SUCCESS"

let USER_SERVICE_BASEPATH = 'https://devv4.firstleap.cn'

if (process.env.NODE_ENV == 'production') {
    USER_SERVICE_BASEPATH = 'https://v4.firstleap.cn'
}

export {
    CALL_API_HTTP,
    CALL_API_HTTP_START,
    CALL_API_HTTP_FAIL,
    CALL_API_HTTP_DONE,
    DOWNLOAD,
    UPLOAD,
    UPLOAD_START,
    UPLOAD_FAIL,
    UPLOAD_PROGRESS,
    UPLOAD_SUCCESS,
    USER_SERVICE_BASEPATH
}