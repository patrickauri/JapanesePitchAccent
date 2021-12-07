import React, { useState } from 'react'
import PitchCard from './components/PitchCard'
const db = require('./db/NHKdata.json')

const App = () => {
    const [pitch, setPitch] = useState([])

    const getPitch = (e: any) => {
        // Get all results starting with the query
        const results = db.filter((item: any) => item['Word 1A'].includes(e))
        if (results) {
            // item['Word 1A'][item['Word 1A'].indexOf(e) - 1] === '【'

            setPitch(results)
        } else {
            setPitch([])
        }
    }

    const handleSubmit = (e: any) => {
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
                    <PitchCard key={i} data={e} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default App
