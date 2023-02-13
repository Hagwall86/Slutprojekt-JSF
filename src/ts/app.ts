
const kn = document.querySelector("#n")!



//! 1 Skapa en sök funktion på namn
//! 2 Fixa så man delar namnen som inte har mellanrum på ","
//! 3 Fixa till så favorit funtionen fungerar
//! 4 ??



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
    //! ha valuta: number,
}

//* Hämta länk

const allInfo = "https://restcountries.com/v3.1/all"


//? Detta ska vara söklänken som skickar in ett namn från en Lista? hmmmmmmmmm
const allName = "https://restcountries.com/v3.1/name/"    /*Sök*/

const allCapital = ""
const container = document.querySelector('.theMain')!
const searchBar = document.querySelector('#search-bar') as HTMLInputElement
const searchBtn = document.querySelector('#search-btn')!
const countrySection = document.createElement('section')
const favArr: string[] = []

let countryObj: {
    countryArr: countryTemplate[],
} = {
    countryArr: []
}

//* Hämtar APIet samt min container i HTML
async function getAllInfo () {
    const respons = await fetch(allInfo)
    const allData = await respons.json()

    //*Här sorterar jag namnen i bokstavsordning eftersom dom inte kommer i det från APIet
    //* tar in två namn och om den ena är större än den andre så byter dom plats.

    kn.addEventListener("click", (e) => {
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
        countryObj.countryArr.sort(function(a,b) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        })
    }

    //* Här skrivs det ut 10st random länder för att slippa ha alla länder direkt när man kommer in
    function randomCountry () {
        const randomArr: number[] = []
        let randomIndex=0

        //Loopar igenom countryArryen för att plocka ut 10st random
        for (let i = 0; i < 250; i++) {
            //Så länge vi har ett nytt index till randomArr hoppar vi ur whileLoopen och tar fram
            //nytt index tills det finns 10st
            while(true){
                randomIndex=Math.floor(Math.random() * countryObj.countryArr.length);

                // finns randomIndex redan? bryt och börja om tills de finns 10st
                if(randomArr.indexOf(randomIndex) === -1)
                    break
            }
            randomArr.push(randomIndex)
        } console.log(randomArr)

        //Sorterar randomArr i nummer ordning för att få ut de i bokstavsordning
        randomArr.sort(function(a,b) {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
        randomArr.push(204)
        console.log(randomArr);
        console.log(countryObj.countryArr[204].capital.length)


        for (const i of randomArr) {
            const card = document.createElement('div')
            const countryInfo = document.createElement('p')
            const flag = document.createElement('img')
            const favButton = document.createElement('button')


            favButton.innerText = 'FAV'

            // countryObj.countryArr[i].name.split(',')

            // countryObj.countryArr[i].capital.split(',')
            // favButton.id = 'fav-btn'
            countryObj.countryArr[i].capital
            countryInfo.innerHTML = `Name: ${countryObj.countryArr[i].name} <br/> Capital: ${countryObj.countryArr[i].capital}`
            flag.src = countryObj.countryArr[i].flag


                countryObj.countryArr[i]

            container.append(card)
            card.append(flag, countryInfo)
            // card.append(favButton)


            // favButton.addEventListener('click', function (e) {
            //     favButton.innerText = 'Added'
            //     console.log();

            //     favArr.push()
            // })

        }
    }
    randomCountry()
}

getAllInfo()

searchBtn.addEventListener('click',  (e) => {

    async function getSearchCountry() {
        console.log(searchBar.value )
        const response = await fetch(allName + searchBar.value)
        const data = await response.json()
        searchBar.innerHTML = ""
        container.innerHTML = ""
        console.log(data[0].name.common)
        // console.log(data[0].name.common)


    }


getSearchCountry()
})






// console.log(countryObj.countryArr);


// todo: Denna loopen tar fram alla länder

//Lägga ut namnen på alla i en div
//Lägga till flaggan
//Visa upp 10 random länder på start
//Dela upp i kontineter
// Göra en sökfuntion som tar antinge stad eller land
// en sökfuntion som tar upp vilka läner som gränsar till landet men som oxå skriver ut hela namnet inte förkortningen på de




