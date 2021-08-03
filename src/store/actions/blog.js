import { GET_BLOG, GET_BLOG_BY_ID, UPDATE_BLOG, DELETE_BLOG, POST_BLOG } from '../../utils/constants'
import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const getBlogs = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/posts`).then((response) => {
      dispatch({
        type: GET_BLOG,
        payload: response.data
      })
    })
  }
};

export const getBlogById = (id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/posts/${id}`).then((response) => {
      dispatch({
        type: GET_BLOG_BY_ID,
        payload: response.data
      })
    })
  }
};

export const updateBlogById = (data) => {
  console.log(data)
  return (dispatch) => {
    axios.put(`${API_URL}/posts/${data.id}`, data).then((response) => {
      console.log(response)
      dispatch({
        type: UPDATE_BLOG,
        payload: response.data
      })
      dispatch(
        getBlogs()
      )
    })
  }
};

export const deleteBlogById = (id) => {
  return (dispatch) => {
    axios.delete(`${API_URL}/posts/${id}`).then((response) => {
      console.log(response)
      dispatch({
        type: DELETE_BLOG,
        payload: response.data
      })
      dispatch(
        getBlogs()
      )
    })
  }
};

export const postBlog = (data) => {
  return (dispatch) => {
    axios.post(`${API_URL}/posts/${data.id}`, data).then((response) => {
      console.log(response)
      dispatch({
        type: POST_BLOG,
        payload: response.data
      })
      dispatch(
        getBlogs()
      )
    })
  }
};