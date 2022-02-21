document.querySelector("#form").addEventListener("submit" , studentData )
let studentDataBase=JSON.parse(localStorage.getItem("studentDataBase")) || []
function studentData(event){
event.preventDefault()

    let name=document.querySelector("#name").value
    let age=document.querySelector("#age").value
    let gender=document.querySelector("#gender").value
    let email=document.querySelector("#email").value
    let phone=document.querySelector("#phone").value
let stuobj={
    name: name, 
    age: age,
    gender: gender,
    email:email,
    phone:phone
}
studentDataBase.push(stuobj)
localStorage.setItem("studentDataBase", JSON.stringify(studentDataBase))
console.log(studentDataBase)
}