import React, {useEffect} from 'react';
import BlogPost from '../../components/blog-post';
import { connect } from 'react-redux';
import { getBlogs } from '../../store/actions/blog';

const Blog = (props) => {
  useEffect(() => {
    props.getBlogs()
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <div style={{ display: 'flex' }}>
        {props.posts && props.posts.map((val, key) => (
          <BlogPost data={val} key={key} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.blogReducer.posts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => dispatch(getBlogs()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Blog)