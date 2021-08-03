import React, {useEffect} from 'react';
import BlogPost from '../../components/blog-post';
import { connect } from 'react-redux';
import { getBlogById } from '../../store/actions/blog';

const BlogDetail = (props) => {
  const { params } = props.match
  
  useEffect(() => {
    props.getBlogById(params.id)
  }, []);

  return (
    <div>
      {props.post && (
        <BlogPost data={props.post} isDetail={true} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    post: state.blogReducer.post,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogById: (id) => dispatch(getBlogById(id)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)