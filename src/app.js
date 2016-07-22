import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import AppComponent from "./components/App.js";
import store from "./store";

ReactDOM.render(<Provider store={store}><AppComponent /></Provider>, document.getElementById('app'));