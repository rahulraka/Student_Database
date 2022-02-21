let reject=JSON.parse(localStorage.getItem('rejected'));
// console.log(admit)

reject.map(function(el,ind){
    // document.querySelector("#body").innerHTML = null;

    let row = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerText = el.name;

    let col2 = document.createElement("td")
    col2.innerText= el.age;

    let col3 = document.createElement("td")
    col3.innerText=el.gender;

    let col4 = document.createElement("td")
    col4.innerText=el.email;

    let col5 = document.createElement("td")
    col5.innerText=el.phone;

    row.append(col1,col2,col3,col4,col5);

    document.querySelector("#body").append(row)

    console.log(el)

})