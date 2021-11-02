import { useState } from "react";
import classes from "./Search.module.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setTextSearch] = useState("");

  const searchTextHandler = (event) => {
    setTextSearch(event.target.value);
  };
  
  return (
    <div className={classes.searchDiv}>
      <form>
        <input
          className={classes.searchFeild}
          type="text"
          required
          onChange={searchTextHandler}
          minLength="3"
          placeholder="search for anything.."
        />
        <Link
          className={classes.searchButton}
          
          to={{
            pathname: "/search-results",
            state: {
              text: searchText,
            },
          }}
        >
          Search
        </Link>
      </form>
    </div>
  );
};

export default Search;
