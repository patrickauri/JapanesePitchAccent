import { GetPitchTypeName, IsSmallKana, ParseNHK } from "../config/Utilities"

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
  let readingList: any = []
  // For use with Nakadaka & Odaka only
  let currentMora: number = 1

  for (let index = 0; index < reading.length; index++) {
    // Check if current mora is attached to the previous mora
    if (!IsSmallKana(reading[index])) {
      let _mora: any

      // Check if next mora is attached to the current mora
      if (IsSmallKana(reading[index + 1])) {
        _mora = reading[index] + reading[index + 1]
      } else {
        _mora = reading[index]
      }

      // Heiban
      if (pitchNumber === 0) {
        if (index === 0) {
          readingList.push({ mora: _mora, type: "rise" })
        } else {
          readingList.push({ mora: _mora, type: "high" })
        }
      }
      // Atamadaka
      if (pitchNumber === 1) {
        if (index === 0) {
          readingList.push({ mora: _mora, type: "drop" })
        } else {
          readingList.push({ mora: _mora, type: "low" })
        }
      }
      // Nakadaka & Odaka
      if (pitchNumber > 1) {
        if (currentMora === pitchNumber) currentMora++
      }
    }
  }

  return (
    <div className="pitch-container">
      {readingList.map((e: any, i: number) => (
        <span key={i} className={"pitch-" + e.type}>
          {e.mora}
        </span>
      ))}
    </div>
  )
}
