//Button EventHandeler setup.
//get Input value.
//Error Handaling..for stritng value.


// fetch Data.............
const SearchButton =()=>{
    const Inplut = document.getElementById("input_value");
    const Error = document.getElementById("Error")
    const inputValue = Inplut.value;
    console.log(inputValue);

    if(isNaN(inputValue)){
        Error.innerText="Please inter a Number"
        
    }

//     const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
// fetch (url)
// .then(Response => Response.json())
// .then(data => console.log(data))
}

