//
//          Pitch Data Structure
//
//      Word:           string
//      Pitch Number:   integer
//      Reading:        array of strings
//      Pitch Type:     string
//
//

export const ParseNHK = (data) => {
    const dWord = data['Word 1A']
    const dPitch = data['Pitch 1.1']

    let result = { word: '', pitchNumber: -1, reading: [], pitchType: '' }

    const ParseNHKReading = () => {
        // Add each character of the reading into an array
        let a = []
        for (let i = 0; i < dPitch.length; i++) {
            if (dPitch[i] !== '') {
                console.log(`Char: ${dPitch} `)
                /* if (dPitch[i] === '＼') {
                    result.pitchNumber = i
                } else if (dPitch[i] === '￣') {
                    result.pitchNumber = 0
                } else {
                    a.push(dPitch[i])
                } */
            }
        }
        result.reading = a.toString()
    }

    if (dPitch) {
        ParseNHKReading()
    }

    const ParsePitchNumber = () => {}

    return result
}
