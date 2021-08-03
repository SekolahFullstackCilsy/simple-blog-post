import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBlogById, deleteBlogById } from '../../store/actions/blog';

const BlogPost = ({ data, isDetail, updateBlogById, deleteBlogById }) => {
  const [edited, setEdited] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    content: '',
  });

  useEffect(() => {
   setFormData({...data})
  }, [data]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveEdit = (e) => {
    e.preventDefault()
    updateBlogById(formData)
  }

  const handleDeletePost = (id) => {
    deleteBlogById(id)

  }

  console.log(data)
  return (
    <div style={{backgroundColor: 'teal', borderRadius: '5px', padding: '20px', margin: '5px'}}>
      {isDetail && <button onClick={() => setEdited(!edited)}>Edit Post</button>}
      {<button onClick={() => handleDeletePost(data.id)}>Delete Post</button>}
      {edited ? (
        <form onSubmit={handleSaveEdit}>
          <div><label htmlFor="">Title</label><input type="text" name="title" value={formData.title} onChange={(e) => handleFormChange(e)}/></div>
          <div><label htmlFor="">Content</label><input type="text" name="content" value={formData.content} onChange={(e) => handleFormChange(e)}/></div>
          <div><label htmlFor="">Author</label><input type="text" name="author" value={formData.author} onChange={(e) => handleFormChange(e)}/></div>
          <button type="submit">Save Post</button>
        </form>
      ) : (
        <>
          <Link to={`/blog/${data.id}`}><h2>{data.title}</h2></Link>
          <h5>Author By : {data.author}</h5>
          {isDetail && (
            <p>{data.content}</p>
          )}
        </>
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBlogById: (data) => dispatch(updateBlogById(data)),
    deleteBlogById: (id) => dispatch(deleteBlogById(id)),
  }
};


export default connect(null, mapDispatchToProps)(BlogPost)
