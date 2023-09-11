import React, { useState } from "react";

function SearchContainer({ setUIData }) {
  const [searchData, setSearchData] = useState("");
  const userQuery = searchData.split(" ").join("");
  const token = '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';

  async function handleSearchSubmit() {
    try {
      const API_URL = `https://api.github.com/users/${userQuery}`;
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setUIData(data); // Update the UI with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="Search-Container flex p-2 rounded-full border-2 gap-2">
      <input
        type="search"
        placeholder="Enter Username....."
        className="flex-1 outline-none"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 rounded-full"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default SearchContainer;
