import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderMessage = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title ${this.props.stream.title}`;
  };

  render() {
    const streamId = this.props.match.params.id;
    return (
      <div>
        StreamDelete
        <Modal
          onDismiss={() => history.push("/")}
          title="Delete Stream?"
          message={this.renderMessage()}
          btn1="Delete"
          btn2="Cancel"
          onDelete={() => this.props.deleteStream(streamId)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
