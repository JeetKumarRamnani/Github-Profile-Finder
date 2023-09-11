import React, { useState } from "react";

function SearchContainer({ setUIData }) {
  const [searchData, setSearchData] = useState("");
  const userQuery = searchData.split(" ").join("");
  const token = '';

  const exampleResponse= {
    "login": "JeetKumarRamnani",
    "id": 110333842,
    "node_id": "U_kgDOBpOPkg",
    "avatar_url": "https://avatars.githubusercontent.com/u/110333842?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JeetKumarRamnani",
    "html_url": "https://github.com/JeetKumarRamnani",
    "followers_url": "https://api.github.com/users/JeetKumarRamnani/followers",
    "following_url": "https://api.github.com/users/JeetKumarRamnani/following{/other_user}",
    "gists_url": "https://api.github.com/users/JeetKumarRamnani/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JeetKumarRamnani/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JeetKumarRamnani/subscriptions",
    "organizations_url": "https://api.github.com/users/JeetKumarRamnani/orgs",
    "repos_url": "https://api.github.com/users/JeetKumarRamnani/repos",
    "events_url": "https://api.github.com/users/JeetKumarRamnani/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JeetKumarRamnani/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jeet Kumar Ramnani",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Web Developer And Musician",
    "twitter_username": null,
    "public_repos": 49,
    "public_gists": 0,
    "followers": 6,
    "following": 1,
    "created_at": "2022-07-31T10:46:19Z",
    "updated_at": "2023-09-09T21:38:53Z"
}

  async function handleSearchSubmit() {
    try {
      const API_URL = `https://api.github.com/users/${userQuery}`;
      const response = await fetch(API_URL
    //     , {
    //     headers: {
    //       Authorization: `Bearer ${token}`, 
    //     },
    //   }
    );

      if (!response.ok) {
        setUIData(exampleResponse)
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
