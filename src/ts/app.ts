


// interface countryTemplate { [key: string]: string | string[]; }


//? Detta är mallen för den nya array

interface countryTemplate {
    name: string,
    capital: string,
    region: string,
    population: number,
    area: number,
    borders: string,
}



//* Hämta länk

const allInfo = "https://restcountries.com/v3.1/all"
const allNames = ""
const allCapital = ""
const container = document.querySelector('.theMain')!
const countrySection = document.createElement('section')
// const countryObj: {
//     countryArr: CountryArr[],
// } = {
//     countryArr: [],
// }
// const countryTemplate = {
//     name: "",
//     capital: "",
//     region: "",
//     population: 0,
//     area: 0,
//     borders: "",
// }

let countryObj: {
    countryArr: countryTemplate[],


} = {
    countryArr: []

}



//* Hämtar APIet samt min container i HTML
async function getAllInfo () {
    const respons = await fetch(allInfo)
    const allData = await respons.json()

    // typa inte upp inkommand data utan gör om det och lägg i en ny array

    // countryArr.push(...Object.keys(allData.name))
    // countryArr.push(allData.name.common)



    console.log(countryObj.countryArr)
    // console.log(allData)
    // const test1 = document.createElement('div')

    // container.append(countrySection)
    // countrySection.append(test1)
    // // console.log(allData[0])


    // console.log(countryArr)

    //? Göra en if för att kolla om det är en array eller inte
    // if (allData.name.common === []) {}



    //*Här sorterar jag namnen i bokstavsordning eftersom dom inte kommer i det från APIet
    //* tar in två namn och om den ena är större än den andre så byter dom plats.
    countryObj.countryArr.sort(function(a,b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    //* Här skrivs det ut 10st random länder för att slippa ha alla länder direkt när man kommer in
    function randomCountry () {
        for (let i = 0; i < 10; i++) {
            //* Här ska data som jag vill ha ut från apiet läggas in i objektet
            console.log(allData[i])
            countryObj.countryArr.push(allData.name.comom)
            countryObj.countryArr.push(allData.capital)
            countryObj.countryArr.push(allData.region)
            console.log(countryObj.countryArr)
            const random = (countryObj.countryArr[Math.floor(Math.random() * countryObj.countryArr.length)].name)
            const card = document.createElement('div')
            card.innerHTML = `${random}`
            container.append(card)
        }
    }
    randomCountry()
}

getAllInfo()





// todo: Denna loopen tar fram alla länder
// for (const element of allData) {
//     const card = document.createElement('div')
//     card.innerHTML = `${element.name.common} <br/>`
//     container.append(card)





//Lägga ut namnen på alla i en div
//Lägga till flaggan

//Visa upp 10 random länder på start
//Dela upp i kontineter





// Göra en sökfuntion som tar antinge stad eller land
// en sökfuntion som tar upp vilka läner som gränsar till landet men som oxå skriver ut hela namnet inte förkortningen på de
