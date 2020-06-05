import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
const pageOne = () => {
  return (
    <div>
      <Link to="/2">Hello</Link>
    </div>
  );
};
const pageTwo = () => {
  return <div>there</div>;
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
