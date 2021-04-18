import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui primary button link"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Find out more
          </a>
        </div>
        <div className="content">
          <div className="big">{result.title}</div>

          <span
            className="small"
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          ></span>
          <br />
          <hr />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form mainsearch">
        <div className="field">
          <h1 className="label">Search language history</h1>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            placeholder="search"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

/**
 *
 *
 *
 *
 */
