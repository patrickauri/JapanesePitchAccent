import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import PitchCard from "./components/PitchCard"
import "animate.css"
import Animate from "@charlesvien/react-animatecss"
const db = require("./db/NHKdata.json")

const App = () => {
  const [pitch, setPitch] = useState([])
  const [errorMsg, setErrorMsg] = useState<string>()

  const getPitch = (e: any) => {
    // Get all results starting with the query
    const results = db.filter(
      (item: any) =>
        item["Word 1A"].startsWith(e) ||
        item["Word 1A"].indexOf(e) === item["Word 1A"].indexOf("【") + 1
    )
    if (results.length > 0) {
      console.table(results)
      setErrorMsg("")
      setPitch(results)
    } else {
      setErrorMsg(`There are no results for: ${e}`)
      setPitch([])
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const input = e.target[0].value

    if (input && input !== "") {
      getPitch(input)
    }
  }

  return (
    <React.Fragment>
      <a href=".">
        <h1>Pitch Accent</h1>
      </a>
      <h2 style={{ marginBottom: "2em" }}>Japanese Pitch Accent Dictionary</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search Japanese Word" />
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="results-container">
        {pitch.map((e, i) => (
          <Animate
            key={`${e["Word 1A"]} ${i}`}
            animationIn="fadeIn"
            inDuration={500}
            inDelay={i * 100}
          >
            <PitchCard data={e} />
          </Animate>
        ))}
      </div>
      <div className="errorMsg">{errorMsg}</div>

      <a href="https://patrickauri.com" target="_blank" rel="noreferrer">
        <p className="text-secondary" style={{ marginBottom: "1em" }}>
          Created by Patrick Auri
        </p>
      </a>
      <a
        className="github-button"
        href="https://github.com/patrickauri"
        aria-label="Follow @patrickauri on GitHub"
      >
        Follow @patrickauri
      </a>
      <a
        className="github-button"
        href="https://github.com/patrickauri/japanesepitchaccent"
        data-icon="octicon-star"
        aria-label="Star patrickauri/japanesepitchaccent on GitHub"
      >
        Star
      </a>
    </React.Fragment>
  )
}

export default App
