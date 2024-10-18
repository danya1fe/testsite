// console.log("Wsp")

// const b=5
// let c=10
// c=5
// console.log(c)
// const COLOR_RED="#FFFFFF"
// const myName="sdsd"
// let isChecked=true
// let biggest=4>5
// console.log(biggest)
// const age=null
// let name
// console.log(name)
// console.log(typeof 5)
// console.log(typeof(50+"off"))
// console.log(Math.random(4,5))
// console.log(`hello ${myName}`)
// c++
// c--
// ++c
// console.log(c)
// let counter=1
// let a=++counter
// console.log(a)
// let counter2=1
// let f=counter2++
// console.log(2!=1)
// console.log(`hello ${myName}`)
// alert(2>2)
// alert ("Hello")
// let result= prompt("Your name")
// console.log(result)
// let human = confirm("Are you human?")
// alert(human)
// let a = 5
// if (a==4){
// alert("corectly")
// }
// if(a==5) alert("abc")
//     const year=prompt("Which year is now?")
// if (year==2024){
// alert("corectly")
// }else if(year==0){
// alert("you guessed the secret year") 
// }
//  else{
//     alert("not corectly")
// }
// let success=(a>2)? true : false

// if (a>2){

// }
// || или |or возврощает первое истиное значения
// && и |and возврощает первое ложное значения
// приоретет оператора И выше чем у или A && B || C && D
// ! NOT|НЕ 
const button = document.getElementById("button");
let Wod = document.getElementById("Wod");
button.addEventListener("click",function(){
    let value = Wod.value .toLowerCase()//то что ввели в инпут
    if (value.includes("hello")||value.includes("hi")||value.includes("What's up")){
alert("Hello, how can i help?")
    }
    else {alert ("didn't gotchu, could you repeat?")
       Wod.value=""
    }

})
const Buttonchik = document.getElementById("butonchik")
Buttonchik.addEventListener("click",function(){
alert("Type here your question")
})
const placeholder = document.getElementById("placeholder")
placeholder.addEventListener("click", function(){
    Wod.value = ("Sup, how can i help you?")
})

const BaseUser = [
    {
        name:"danya",
        pass:"123"
    },
{
    name:"guest13213",
    pass:"14234"
}
]
const login = document.getElementById("login")
const password = document.getElementById("password")
const auth = document.getElementById("auth")
const gpt = document.getElementById("gpt")
auth.addEventListener("click", function(){
    let LoginValue = login.value
    let PasswordValue = password.value//то что ввели в инпут
    console.log(LoginValue, PasswordValue)
    for(let value of BaseUser){
       if (LoginValue==value.name && PasswordValue==value.pass){
        console.log ("Succesfuly Authentication!")
        auth.style.backgroundColor="green"
        gpt.style.display="block"
        localStorage.setItem("login", LoginValue)
        break
       }

       else {console.log("Wrong password or username!")
        auth.style.backgroundColor="red"
       }


    }
})


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'danya',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    const url ='https://jsonplaceholder.typicode.com/posts/101'
const testspan = document.getElementById("testapi")
fetch(url)
.then(response=>{
    if (!response.ok){

    }
    return response.json()
})
.then(data=>{
    testspan.innerText=data.title
console.log(
    data
)
})