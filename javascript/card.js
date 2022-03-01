//Button EventHandeler setup.
//get Input value.
//Error Handaling..for stritng value.


// fetch Data.............
const SearchButton =()=>{
    const Input = document.getElementById("input_value");
    const Error = document.getElementById("Error")
    const inputValue = Input.value;
    console.log(inputValue);

    if(isNaN(inputValue) || inputValue ==""){
        Error.innerText="Please inter a Number"
        Input.value="" 
    }
    
    else if(inputValue<=0){
        Error.innerText="please Enter a Positive Number"
    Input.value= ""
    }

    else{
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
    fetch (url)
    .then(Response => Response.json())
    .then(data => console.log(data))
    Input.value=""
    }
 
}

