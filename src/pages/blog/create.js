import React, {useState} from 'react';
import { connect } from 'react-redux';
import { postBlog } from '../../store/actions/blog';

const CreateBlog = (props) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    content: '',
  });


  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    props.postBlog(formData)
  }

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSave}>
        <div><label htmlFor="">Title</label><input type="text" name="title" value={formData.title} onChange={(e) => handleFormChange(e)}/></div>
        <div><label htmlFor="">Content</label><input type="text" name="content" value={formData.content} onChange={(e) => handleFormChange(e)}/></div>
        <div><label htmlFor="">Author</label><input type="text" name="author" value={formData.author} onChange={(e) => handleFormChange(e)}/></div>
        <button type="submit">Save Post</button>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    postBlog: (data) => dispatch(postBlog(data)),
  }
};


export default connect(null, mapDispatchToProps)(CreateBlog)