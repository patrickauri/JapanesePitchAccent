import { useEffect, useState } from "react"
import { GetPitchTypeName, ParseNHK } from "../config/Utilities"

export default function PitchCard({ data }: any) {
  const parsedData = ParseNHK(data)

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-title">{data["Word 1A"]}</div>
        <div className="card-number">{parsedData.pitchNumber}</div>
      </div>
      <div className="card-reading">
        <PitchDrawing
          reading={parsedData.reading}
          pitchNumber={parsedData.pitchNumber}
        />
      </div>
      <div className="card-bottom">
        {GetPitchTypeName(parsedData.pitchType)}
      </div>
    </div>
  )
}

const PitchDrawing = ({ reading, pitchNumber }: any) => {
  let readingList = []

  for (let index = 0; index < reading.length; index++) {
    const _mora: any = reading[index]
    console.log(index)
    if (pitchNumber === 0) {
      // Heiban
      if (index === 0) {
        console.log(`Index: ${index} Mora: ${_mora}`)
        readingList.push({ mora: _mora, type: "rise" })
      } else {
        readingList.push({ mora: _mora, type: "high" })
      }
    }

    readingList.push(_mora)
  }

  console.table(readingList)

  return (
    <div className="pitch-container">
      {readingList.map((e, i) => (
        <span key={i} className={"pitch-" + e.type}>
          {e.mora}
        </span>
      ))}
    </div>
  )
}
