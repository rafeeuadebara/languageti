import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

import Route from "./components/Route";

import "./App.css";

const items = [
  {
    title: "what is a language?",
    content:
      "A language is a structured system of communication used by humans, including speech, gestures and writing.",
  },

  {
    title: "what is the oldest language in the world",
    content:
      "The Tamil language is recognized as the oldest language in the world and it is the oldest language of the Dravidian family.",
  },

  {
    title: "how do you use a language",
    content:
      "Multiple uses of language exist to communicate, direct, and express ideas, feelings, and information.",
  },
];

export default () => {
  return (
    <div>
      <h1 className="languageti">languageti</h1>
      <Route path="/">
        <Accordion items={items} />{" "}
      </Route>

      <Route path="/list">
        <Search />{" "}
      </Route>
    </div>
  );
};

/*** 
 * <Accordion items={items} />
 * 
 * 
 * 
 * export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>

      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};




<Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
*/
