//
//          Pitch Data Structure
//
//      Word:           string
//      Pitch Number:   integer
//      Reading:        array of strings
//      Pitch Type:     string
//
//

interface Result {
  word: string
  pitchNumber: number
  reading: string
  pitchType: string
}

export const ParseNHK = (data: any) => {
  const dWord = data["Word 1A"]
  const dPitch = data["Pitch 1.1"]

  let result: Result = {
    word: "empty",
    pitchNumber: -1,
    reading: "no reading",
    pitchType: "no type",
  }

  /* const IsPitchSmallKana = (x) => {
    const kanaArray = ["ゃ", "ゅ", "ょ"]

    kanaArray.forEach((k) => {
      if (x === k) return true
    })
    return false
  } */

  const ParseNHKWord = () => {
    const locStart = dWord.indexOf("【") + 1
    const locEnd = dWord.indexOf("】")
    result.word = dWord.substring(locStart, locEnd)
  }

  const ParseNHKReading = () => {
    const readingKana = dWord.substring(0, dWord.indexOf("【"))
    let a: string[] = []

    if (dPitch.indexOf("￣") === -1) {
      // Kifukushiki
      let pitchIndex = 0
      a = dPitch.split("")
      a.forEach((e, i) => {
        if (e.charCodeAt(0) === 12442) {
          a.splice(i, 1)
        }
      })
      console.table(a)
    } else {
      // Heibanshiki
      result.pitchNumber = 0
    }

    /* for (let i = 0; i < dPitch.length; i++) {
      if (dPitch[i] !== "") {


        if (!IsPitchSmallKana(dPitch[i])){
            pitchIndex++
        }
      }
    } */

    result.reading = a.toString()
  }

  ParseNHKWord()
  if (dPitch) ParseNHKReading()

  const ParsePitchNumber = () => {}

  return result
}
