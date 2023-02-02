


interface countryTemplate { [key: string]: string | string[]; }


//* Hämta länk

const allInfo = "https://restcountries.com/v3.1/all"
const allNames = ""
const allCapital = ""
const container = document.querySelector('.theMain')!
const countrySection = document.createElement('section')


//* Hämtar APIet samt min container i HTML
async function getAllInfo () {
    const respons = await fetch(allInfo)
    const allData: countryTemplate = await respons.json()

    //*Här sorterar jag namnen i bokstavsordning eftersom dom inte kommer i det från APIet
    //* tar in två namn och om den ena är större än den andre så byter dom plats.
    allData.sort(function(a:any,b:any) {
        if (a.name.common < b.name.common) return -1
        if (a.name.common > b.name.common) return 1
        return 0
    })

    //* Här skrivs det ut 10st random länder för att slippa ha alla länder direkt när man kommer in
    function randomCountry () {
        for (let i = 0; i < 10; i++) {
            const random = (allData[Math.floor(Math.random() * allData.length)].name.common)
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
