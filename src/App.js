import React, { useState } from 'react'
import PitchCard from './components/PitchCard'
const db = require('./db/NHKdata.json')

function App() {
    const [pitch, setPitch] = useState([])

    const getPitch = (e) => {
        // Get all results starting with the query
        const results = db.filter(
            (item) =>
                item['Word 1A'].includes(e) &&
                item['Word 1A'][item['Word 1A'].indexOf(e) - 1] === '【'
        )

        if (results) {
            //console.table(results)
            setPitch(results)
        } else {
            //console.log("No Results")
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
            <h1>Simple Pitch</h1>
            <h2>created by Patrick Auri</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='Search Japanese Word' />
                <button type='submit'>Search</button>
            </form>
            <div className='results-container'>
                {pitch.map((e, i) => (
                    <PitchCard key={e['Word 1A']} data={e} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default App
