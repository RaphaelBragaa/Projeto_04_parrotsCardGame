import React from 'react'

export default function Transition(){

const [hidden1, setHidden1] = React.useState("tela1")
const [hidden2, setHidden2] = React.useState("hidden")
console.log(hidden1)
console.log(hidden2)

     if(hidden1 === "tela1" && hidden2 === "hidden"){
        setHidden1("hidden")
        setHidden2("tela2")
        console.log(hidden1)
        console.log(hidden2)
     }
    
}