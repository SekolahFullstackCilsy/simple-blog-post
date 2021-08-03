import { GET_BLOG, GET_BLOG_BY_ID } from "../../utils/constants"

const initialState = {
  posts: [],
  post: {}
}

// type = GET_TODO, GET_TODO_BY_ID
// payload = data = [{id: 1, name: 'asfaf'}], 

const blogReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_BLOG:
      return {
        ...state,
        posts: payload
      }
    
    case GET_BLOG_BY_ID:
      return {
        ...state,
        post: payload
      }
  
    default:
      return state
  }
}

export default blogReducer