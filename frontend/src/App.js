import React from "react";

import { Router, Route, Link } from "react-router-dom";

import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Header />
        </div>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
