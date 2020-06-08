import React from "react";

import { Router, Route, Link, Switch } from "react-router-dom";

import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div className="App h-auto bg-gray-900">
      <Router history={history}>
        <div>
          <Header />
        </div>
        <div className="h-auto">
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
