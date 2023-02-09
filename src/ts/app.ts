
const kn = document.querySelector("#n")!



// länk till jordens flagga https://www.flagofplanetearth.com/
//Url: https://images.squarespace-cdn.com/content/v1/5fa6b76b045ef433ae7b252e/1604765875569-MUAEJNXG2NL6E4VEORZ6/Flag_20x30.jpg

// interface countryTemplate { [key: string]: string | string[]; }

//? Detta är mallen för den nya array

interface countryTemplate {
    name: string,
    capital: string,
    population: number,
    flag: string,
    // region: string,
    // area: number,
}

//* Hämta länk

const allInfo = "https://restcountries.com/v3.1/all"


//? Detta ska vara söklänken som skickar in ett namn från en Lista? hmmmmmmmmm
const allNames = "https://restcountries.com/v3.1/name"    /*Sök*/

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
        e.preventDefault()
        container.innerHTML = ""
        console.clear()
        randomCountry()
    })

    //* En loop som tar ut den datan jag vill spara och lägger till de i mitt Objekt.
    for (let i = 0; i < allData.length; i++) {
        const tempObj = {
            name: allData[i].name.common,
            capital: allData[i].capital,
            population: allData[i].population,
            flag: allData[i].flags.png,
        };
        countryObj.countryArr.push(tempObj);
    }

    //* Här skrivs det ut 10st random länder för att slippa ha alla länder direkt när man kommer in
    function randomCountry () {
        const randomArr: number[] = []
        for (let i = 0; i < 10; i++) {
            const random = (countryObj.countryArr[Math.floor(Math.random() * countryObj.countryArr.length)])
            console.log(countryObj.countryArr.indexOf(random));
            console.log(random.name);

            randomArr.push(random[i])

            console.log(randomArr)
            // use randomArr.indexOf för att inte använda samma länder



            // console.log(random[2].name)



            // console.log(tempArrObj);

                    //! Lägga till en funktion som delar på strängarna vid "," så dom får plats i korten

                    // const card = document.createElement('div')
                    // const countryInfo = document.createElement('p')
                    // const flag = document.createElement('img')
                    // countryInfo.innerHTML = `Name: ${random} <br/> Capital: ${countryObj.countryArr[j].capital}`
                    // // countryInfo.innerHTML = countryObj.countryArr[j].capital
                    // flag.src = countryObj.countryArr[j].flag
                    // container.append(card)
                    // card.append(flag, countryInfo)
            }
        }
    randomCountry()
}

getAllInfo()

// for loop med 10 varv random index siffra
// lägg allt i en array på vilken plats dden har i objektet och tar hela den o stoppa in i arrayen
// skapa array med 10 unika siffror
// array index
// sök och ta ut all info som finns på index som


// ny array



// console.log(countryObj.countryArr);


// todo: Denna loopen tar fram alla länder

//Lägga ut namnen på alla i en div
//Lägga till flaggan
//Visa upp 10 random länder på start
//Dela upp i kontineter
// Göra en sökfuntion som tar antinge stad eller land
// en sökfuntion som tar upp vilka läner som gränsar till landet men som oxå skriver ut hela namnet inte förkortningen på de




