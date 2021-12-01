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

    const getReading = () => {}
    console.log([dPitch, dWord])

    const getPitchNumber = () => {}

    let result = { word: '', pitchNumber: -1, reading: [], pitchType: 'hb' }

    return result
}
