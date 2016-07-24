import {CREATE_COMMENT} from '../constants'

export function createComment(user, text){
    return {
        type: CREATE_COMMENT,
        payload: {
            user,
            text
        }
    }
}