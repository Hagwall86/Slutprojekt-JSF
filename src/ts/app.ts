
const kn = document.querySelector("#n")!



// interface countryTemplate { [key: string]: string | string[]; }



//? Detta är mallen för den nya array

interface countryTemplate {
    name: string,
    capital: string,
    // region: string,
    population: number,
    // area: number,
    flag: string,
}



//* Hämta länk

const allInfo = "https://restcountries.com/v3.1/all"
const allNames = ""
const allCapital = ""
const container = document.querySelector('.theMain')!
const countrySection = document.createElement('section')

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

    //*Här sorterar jag namnen i bokstavsordning eftersom dom inte kommer i det från APIet
    //* tar in två namn och om den ena är större än den andre så byter dom plats.
    countryObj.countryArr.sort(function(a,b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    kn.addEventListener("click", (e) => {
        console.clear()
        randomCountry()
    })

    //* En loop som tar ut den datan jag vill spara och lägger till de i mitt Objekt.
    for (let i = 0; i < allData.length; i++) {

        const tempObj = {
            name: allData[i].name.common,
            capital: allData[i].capital,
            population: allData[i].population,
            flag: allData[i].flags.svg,
        };
        countryObj.countryArr.push(tempObj);
    }

    //* Här skrivs det ut 10st random länder för att slippa ha alla länder direkt när man kommer in
    function randomCountry () {
        const randomArr: string[] = [];
        randomArr.push("nisse")

        //* Här ska data som jag vill ha ut från apiet läggas in i objektet
        for (let i = 0; i < 100; i++) {
            const random = (countryObj.countryArr[Math.floor(Math.random() * countryObj.countryArr.length)].name)
            if (random == randomArr[i]) {
                console.log("Det togs bort");
                return
            }else {
                randomArr.push(random)
                console.log(randomArr[i]);
                console.log(randomArr.length -1);



                //* Här tars det värdet som kommer från random och letar upp namnet och tar ut dom andra sakerna man vill ha ut ifrån namnet. Samt lägger ut de i DOMen.
                for (let j = 0; j < countryObj.countryArr.length; j++) {
                    if (random === countryObj.countryArr[j].name) {
                        // console.log(countryObj.countryArr[j].name)
                        const card = document.createElement('div')
                        const countryInfo = document.createElement('p')
                        const flag = document.createElement('img')
                        card.innerHTML = countryObj.countryArr[j].name
                        countryInfo.innerHTML = countryObj.countryArr[j].capital
                        flag.src = countryObj.countryArr[j].flag
                        container.append(card, countryInfo, flag)
                    }
                }
            }
        }
    }
    randomCountry()
}

getAllInfo()




// console.log(countryObj.countryArr);


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
