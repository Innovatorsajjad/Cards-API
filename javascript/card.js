// fetch Data.............
const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
fetch (url)
.then(Response => Response.json())
.then(data => console.log(data))