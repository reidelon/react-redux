import React from 'react';
import List from "./js/components/List";
import Form from "./js/components/Form"
import TemperatureInput from "./js/components/TemperatureInput"
import store from "./js/store/index";

window.store = store;

const App = () => (
<>
  <div>
    <h2>Articles</h2>
      <List />
  </div>
  <div>
    <h2>Add a new article</h2>
    <Form />
  </div>
  <br/>
  <div>
      <TemperatureInput scale = "c"/>
      <TemperatureInput scale = "f"/>
  </div>
</>
);

export default App;
