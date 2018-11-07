import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class NewPost extends Component {
  renderField(field) {
    const inputClassName = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return (
      <div className={inputClassName}>
        <label>{field.title}</label>
        <input className="form-control" type="text" {...field.input} />
        <span className="text-help">{field.meta.touched && field.meta.error}</span>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Abandon
          </Link>
        </div>
        <h3>New Post:</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" title="Title: " component={this.renderField} />
          <Field name="categories" title="Categories: " component={this.renderField} />
          <Field name="content" title="Content: " component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validateForm(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Provide the title';
  }
  if (!values.categories) {
    errors.categories = 'Provide the categories';
  }
  if (!values.content) {
    errors.content = 'Provide the content';
  }
  return errors;
}

export default reduxForm({
  validate: validateForm,
  form: 'PostsNewForm'
})(
  connect(
    null,
    { createPost }
  )(NewPost)
);
