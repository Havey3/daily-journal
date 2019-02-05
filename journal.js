// const journalEntry = [""];

// let journalData = {
//     dateOfEntry:"1/15/2019",
//     concepts: "html,css",
//     entry: "covered html and css, had a blast the entire time",
//     mood: "happy"
// }
// let journalData1 = {
//     dateOfEntry:"1/20/2019",
//     concepts: "started Javascript",
//     entry: "Stared learning javascript, we're just getting into it but it could be fun!",
//     mood: "happy"
// }
// let journalData2 = {
//     dateOfEntry:"1/25/2019",
//     concepts: "javascript",
//     entry: "I hate javascript",
//     mood: "sad"
// }
// journalEntry.push(journalData)
// journalEntry.push(journalData1)
// journalEntry.push(journalData2)
// console.log(journalEntry)

document.querySelector("#submitButton").addEventListener("click", () => {
    const printDate = document.querySelector("#journalDate").value
    console.log(printDate);

    const printMessage = document.querySelector("#journalEntry").value
    console.log(printMessage);

    const printConcepts = document.querySelector("#conceptsCovered").value
    console.log(printConcepts);

    const printMood = document.querySelector("#mood").value
    console.log(printMood);

    const printAll = `<h1>Date: ${printDate}</h1><h2>Entry: ${printMessage}</h2><h2>Concepts Covered: ${printConcepts}</h2><h2>Mood: ${printMood}</h2>`
    console.log(printAll)

    document.querySelector("#entryLog").innerHTML = printAll;
})

const journalComponent = (jcPar) => {
    for (i = 0; i < jcPar.length; i++) {
        const jcVar = `<h1>Date: ${jcPar[i].dateOfEntry}</h1><h2>Entry: ${jcPar[i].entry}</h2><h2>Concepts Covered: ${jcPar[i].concepts}</h2><h2>Mood: ${jcPar[i].mood}</h2>`
        console.log(journalComponent)

        document.querySelector("#entryLog").innerHTML = jcVar;
    }
}

fetch(`http://localhost:3000/entires`) // Fetch from the API
    .then(entries => entries.json)  // Parse as JSON
    .then(parsedEntries => {

        // console.log(parsedEntries)
        journalComponent(parsedEntries)

        // What should happen when we finally have the array?
    })