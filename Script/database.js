let data=JSON.parse(localStorage.getItem("studentDataBase")) 

let accept=JSON.parse(localStorage.getItem("admitted")) || []
let reject=JSON.parse(localStorage.getItem("rejected")) || []

data.map(function(elem){
    // document.querySelector("#body").innerHTML = null;

    let row = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerText = elem.name;

    let col2 = document.createElement("td")
    col2.innerText= elem.age;

    let col3 = document.createElement("td")
    col3.innerText=elem.gender;

    let col4 = document.createElement("td")
    col4.innerText=elem.email;

    let col5 = document.createElement("td")
    col5.innerText=elem.phone;

    let col6 = document.createElement("td")

    let col7 = document.createElement("td")

    let but1 = document.createElement("button")
    but1.innerText="Accept";
    but1.setAttribute("id","but1");
    but1.addEventListener("click",function(){
        accepted(elem)
    })

    let but2 = document.createElement("Button")
    but2.innerText="Reject"
    but2.setAttribute("id","but2");
    but2.addEventListener("click",function(){
        rejected(elem)
    })

    col6.append(but1)
    col7.append(but2)

    row.append(col1,col2,col3,col4,col5,col6, col7)

    document.querySelector("#body").append(row)

    

}) 
function accepted(elem){ 
    accept.push(elem)
    console.log(accept)
    localStorage.setItem("admitted", JSON.stringify(accept))
}

function rejected(elem){
    reject.push(elem)
    console.log(reject)
    localStorage.setItem("rejected", JSON.stringify(reject))
}
// localStorage.clear()
