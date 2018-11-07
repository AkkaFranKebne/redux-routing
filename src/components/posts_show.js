import React, { Component } from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading... </div>;
    }
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to Index
          </Link>
        </div>
        <h3>{post.title}</h3>
        <h6>Category: {post.categories}</h6>
        <p>{post.content}</p>
        <button className="btn btn-danger" onClick={this.onDelete.bind(this)}>
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id] }; // return this specifif post
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostShow);
