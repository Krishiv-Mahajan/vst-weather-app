let input=document.querySelector("input");
let button=document.querySelector("#button");
let city=undefined
let loaction=document.querySelector(".location");
button.addEventListener("click",()=>{
    city=input.value.trim();
    input.value="";
})

//api call
api-url=`http://api.weatherapi.com/v1/current.json?key=8288d8e7c3074919afc43346262301&q=${city}&aqi=no`

fetch(api-url)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    let temp=data.current.temp_c;
    let name=data.location.name;
    let country=data.location.country;
    let status=data.current.condition.text;
}


//update dom    

