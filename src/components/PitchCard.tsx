import React from "react"
import { ParseNHK } from "../config/Utilities"

export default function PitchCard({ data }: any) {
  const parsedData = ParseNHK(data)

  return (
    <div className="card">
      {JSON.stringify(parsedData)}
      <div className="card-top">
        <div className="card-title">{data["Word 1A"]}</div>
        <div className="card-number">
          {/* {parsePitchNumber(data['Pitch 1.1'])} */}
          {parsedData.pitchNumber}
        </div>
      </div>
      <div className="card-reading">
        {/* {parsePitchLines(data['Pitch 1.1'])} */}
        {parsedData.reading}
      </div>
      <div className="card-bottom">
        {/* {parsePitchType(data['Pitch 1.1'])} */}
        {parsedData.pitchType}
      </div>
    </div>
  )
}

/* const parsePitchLines = (p) => {
  const pitchDrop = parsePitchNumber(p)

  let result = []
  for (let i = 0; i < p.length; i++) {
    // HEIBANSHIKI
    if (pitchDrop === 0) {
      switch (i) {
        // First mora
        case 0:
          result.push(<span className="pitch-rise">{p[i]}</span>)
          break
        // All the other mora
        default:
          // Don't display NHK lines
          if (p[i] !== "￣")
            result.push(<span className="pitch-high">{p[i]}</span>)
          break
      }
    }
    // KIFUKUSHIKI
    else {
      // Don't display NHK lines
      if (p[i] !== "＼") {
        if (i + 1 === pitchDrop) {
          result.push(<span className="pitch-drop">{p[i]}</span>)
        }
        if (i + 1 < pitchDrop) {
          result.push(<span className="pitch-high">{p[i]}</span>)
        }
        if (i + 1 > pitchDrop) {
          result.push(<span className="pitch-low">{p[i]}</span>)
        }
      }
    }
  }

  return result
} */

/* const parsePitchNumber = (p) => {
  if (p.indexOf("＼") === -1) {
    return 0
  } else {
    return p.indexOf("＼")
  }
}

const parsePitchType = (p) => {
  const d = parsePitchNumber(p)

  if (d === 0) return "Heiban（平板）"
  if (d === 1) return "Atamadaka （頭高）"
  if (p.indexOf("＼") === p.length - 1) return "Odaka （尾高）"
  return "Nakadaka （中高）"
} */
