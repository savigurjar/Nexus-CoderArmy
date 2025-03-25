import React, { useEffect, useState, useCallback } from "react";

function Main() {
  const [profiles, setProfiles] = useState([]);
  const [numOfProfiles, setNumOfProfiles] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProfile, setSearchedProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch multiple profiles (Memoized using useCallback)
  const generateProfile = useCallback(async (count = 20) => {
    try {
      setLoading(true);
      setProfiles([]); // Clear previous results
      const ran = Math.floor(1 + Math.random() * 100000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load profiles. Try again later!");
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to fetch a single profile (Memoized using useCallback)
  const provideProfile = useCallback(async (name) => {
    if (!name.trim()) {
      alert("Please enter a GitHub username!");
      return;
    }
    setProfiles([]);
    setSearchedProfile(null); // Clear previous search results

    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();
      setSearchedProfile(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Profile not found!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    generateProfile();
  }, [generateProfile]);

  return (
    <div>
      {/* Profile Generation Section */}
      <div className="dbtn">
        <input
          type="number"
          className="input"
          placeholder="Enter Number of Profiles (e.g., 10)"
          value={numOfProfiles}
          min={1}
          onChange={(e) => setNumOfProfiles(e.target.value)}
        />
        <button
          onClick={() => generateProfile(Number(numOfProfiles))}
          disabled={loading}
        >
          {loading ? "Loading..." : "Display Profiles"}
        </button>
      </div>

      {/* Profile Search Section */}
      <div className="dbtn">
        <input
          type="text"
          className="input"
          placeholder="Enter GitHub Username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => provideProfile(searchQuery)} disabled={loading}>
          {loading ? "Searching..." : "Search Profile"}
        </button>
      </div>

      {/* Display Search Result */}
      {searchedProfile && (
        <div className="profiles">
          <div className="cards">
            <img src={searchedProfile.avatar_url} alt="Profile Avatar" />
            <h2>{searchedProfile.login}</h2>
            <button>
              <a
                href={searchedProfile.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
      )}

      {/* Display Profiles */}
      <div className="profiles">
        {profiles.map((value) => (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt="Profile Avatar" />
            <h2>{value.login}</h2>
            <button>
              <a
                href={value.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
