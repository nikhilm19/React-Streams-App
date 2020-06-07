import React from "react";

import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

import "../../index.css";
class StreamCreate extends React.Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.createStream(formProps);
  };
  render() {
    return (
      <div>
        <h1 className="text-2xl ml-8">Create a Stream</h1>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
    return <div>StreamCreate</div>;
  }
}

export default connect(null, { createStream })(StreamCreate);
