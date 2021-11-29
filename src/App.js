import React, { useState } from "react"
const db = require("./db/NHKdata.json")

function App() {
  const [pitch, setPitch] = useState([])

  const getPitch = (e) => {
    // Get all results including the query
    const results = db.filter(
      (item) =>
        item["Word 1A"].includes(e) &&
        item["Word 1A"][item["Word 1A"].indexOf(e) - 1] === "【"
    )

    if (results) {
      console.table(results)
      setPitch(results)
    } else {
      console.log("No Results")
      setPitch([])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target[0].value

    getPitch(input)
  }

  return (
    <React.Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Search Japanese Word" />
        <button type="submit">Search</button>
      </form>
      <p>{JSON.stringify(pitch)}</p>
    </React.Fragment>
  )
}

export default App
