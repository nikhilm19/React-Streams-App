import React from "react";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createStream } from "../../actions";
class StreamCreate extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return <div className="text-red-500">{meta.error}</div>;
    }
  };
  createInput = (formProps) => {
    console.log(formProps.meta);

    return (
      <div className="field bg-blue-100 flex justify-center flex-col p-8">
        <label>{formProps.label}</label>
        <input
          className="rounded border border-red-300"
          {...formProps.input}
        ></input>
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.createStream(formProps);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          component={this.createInput}
          label="enter title"
        ></Field>
        <Field
          name="description"
          component={this.createInput}
          label="Enter desc"
        ></Field>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-8">
          Submit
        </button>
      </form>
    );
    return <div>StreamCreate</div>;
  }
}

const formValidate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter the title";
  }

  if (!formValues.description) {
    errors.description = "Please enter the desc";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate: formValidate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
