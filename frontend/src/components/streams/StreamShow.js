import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();


    //this works  yeah
  };

  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const { title, description } = this.props.stream;
    return (
      <div className=" flex flex-col h-full p-4">
        <video ref={this.videoRef} className="w-full " controls={true}></video>
        <h1 className="text-3xl text-blue-600  inline-block">{title}</h1>
        <h3 className="text-lg text-white">{description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
