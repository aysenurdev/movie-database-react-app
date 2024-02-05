import React, { useEffect, useState, useRef } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchTimeoutId, setSearchTimeoutId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!query) {
      return; // No need to proceed if the query is empty
    }
  
    const timeoutId = setTimeout(() => {
      const uriQuery = encodeURIComponent(query.trim());
      navigate(`/search/${uriQuery}`);
    }, 500);
  
    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts or when the query changes
    };
  }, [query, navigate]);
  

  const handleClick = () => {
    setSearchOpen(!searchOpen);

    if (!searchOpen) {
      ref.current.focus();
    }
  };

  return (
    <div className={`searchBox ${searchOpen ? "active" : ""}`}>
      <input
        className="searchInput"
        ref={ref}
        type="text"
        name="query"
        placeholder="Movie Title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div onClick={handleClick} className="searchButton">
        <ImSearch className="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
