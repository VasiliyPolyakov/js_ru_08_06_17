import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload, id} = action

    switch (type) {
      case ADD_COMMENT:
        return {...commentsState, [id]: {...payload.comment, id}}
    }

    return commentsState
}