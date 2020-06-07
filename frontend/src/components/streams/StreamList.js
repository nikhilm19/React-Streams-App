import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="ml-8">
          <Link
            to="/streams/new"
            className="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline p-4 rounded text-white"
          >
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="p-2 flex flex-row ml-auto mr-4">
          <Link
            to={`/streams/delete/${stream.id}`}
            className="rounded bg-red-700 p-2 pl-4 pr-4 text-white mr-2 w-full"
          >
            Delete
          </Link>
          <Link
            to={`/streams/edit/${stream.id}`}
            className="rounded bg-blue-700 p-2 pl-4 pr-4 text-white w-full"
          >
            Edit
          </Link>
        </div>
      );
    }
  };

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div
          className="item flex flex-row items-center border "
          key={stream.id}
        >
          <FontAwesomeIcon
            className="h-6/12 mr-8 ml-8 "
            size="2x"
            icon={faCamera}
          />
          <div className="content">
            <h1 className="text-2xl">{stream.title}</h1>
            <h1 className="text-xl">{stream.description}</h1>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-3xl text-center text-pink-500">Streams</h2>
        <div className="mb-8">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
