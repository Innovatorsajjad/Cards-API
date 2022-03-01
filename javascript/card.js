//Button EventHandeler setup.
//get Input value.
//Error Handaling..for stritng value.

const main= document.getElementById("main")
// fetch Data.............
const searchButton =()=>{
    const Input = document.getElementById("input_value");
    const Error = document.getElementById("Error")
    const inputValue = parseInt(Input.value);
    console.log(inputValue);

    if(isNaN(inputValue) || inputValue ==""){
        Error.innerText="Please inter a Number"
        Input.value="" 
    }

    else if(inputValue<=0){
        Error.innerText="please Enter a Positive Number"
    Input.value= ""
    }
    else if (inputValue>52){
        Error.innerText="you can see only 52 cards"
    }

    else{
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`
    fetch (url)
    .then(Response => Response.json())
    .then(data => DisplayData(data.cards))
    
    Input.value=""
    }
    const DisplayData= (cards) =>{
        cards.forEach(card=>{
        const div = document.createElement("div")
        div.classList.add("col-md-4")
       div.innerHTML =`
         <div class="card mx-auto" style="width: 15rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                        <h5 class="card-title">${card.suit}</h5>
                        <p class="card-text">${card.code}</p>
                        <a href="#" class="btn btn-primary">See More</a>
                   </div>
               </div>
            
            `    
   main.appendChild(div)
        })
    }
}
