import React, { useState, useEffect } from "react";
import countriesList from "./countries.js";

function Countries() {
  const [repositories, setRepositories] = useState(countriesList);

  const [region, setRegion] = useState("");

  //import from api
  /*
  useEffect(async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await response.json();


    setRepositories(data);
  }, []);

*/

  return (
    <div>
      <label>
        Pick your Continent:
        <select
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
        <ul>
          {repositories
            .filter((countrie) => {
              return region == "" || region == countrie.continent;
            })
            .map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
      </label>
    </div>
  );
}

export default Countries;
