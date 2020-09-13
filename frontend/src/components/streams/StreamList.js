import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import Landing from "../Landing";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      console.log("yes yes yes");
      return (
        <section class="text-gray-500 bg-gray-900 body-font h-auto">
          <div class="container px-10 py-10 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start ">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                Lights, Camera, Action!
              </h1>
              <Link
                to="/streams/new"
                class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
              >
                Create Stream!
              </Link>
            </div>
          </div>
        </section>
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
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg hover:shadow-2xl hover:mb-2">
            <Link to={`/streams/${stream.id}`}>
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/undraw_video_influencer_9oyy.png"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Weitch
              </h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">
                {stream.title}
              </h2>
              <p class="leading-relaxed text-base">{stream.description}</p>
            </Link>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="h-full flex flex-col">
        <section class="text-gray-500 body-font  flex-grow">
          <Landing />
          <div class="container px-10 py-10 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  All Streams
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-base">
                Live stream, match highlights, coding streams and your favorite
                pro players, developers, musicians all in one place
              </p>
            </div>
            <div class="flex flex-wrap -m-4">{this.renderList()}</div>
          </div>
        </section>

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
