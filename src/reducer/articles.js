import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload, id} = action

    switch (type) {
        case DELETE_ARTICLE:
          const copyObj = Object.assign({}, articleState);
          delete copyObj[payload.id]
          return copyObj
      case ADD_COMMENT:
          const article = articleState[payload.articleId]
        return {
          ...articleState,
          [payload.articleId]: {
            ...article,
            comments: (article.comments || []).concat(id)
          }
        }

    }

    return articleState
}