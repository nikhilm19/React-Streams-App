import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);

    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3 className="text-2xl ml-8">Edit a stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(this.props.stream, "title", "description")}
          />
        </div>
      );
    }
    return <div>Null stream</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
