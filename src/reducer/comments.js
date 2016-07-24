import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'
import { CREATE_COMMENT } from '../constants'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultComments, action) => {
    debugger;
    const { type, payload, response, error } = action

    switch (type) {
        case CREATE_COMMENT:
            comments.create(payload);
    }

    return comments
}