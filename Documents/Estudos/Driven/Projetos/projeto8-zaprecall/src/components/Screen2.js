import React from 'react'
import Question from "./Question"
import Transition from './shared/Transition'


export default function Screen2(props){
    let questions= [
        `<h3 className="marginl">Pergunta 1</h3> <img className="icon marginr" src="../images/Vector.svg />`,
        `<h3 className="marginl">Pergunta 2</h3> <img className="icon marginr" src="../images/Vector.svg />`,
        `<h3 className="marginl">Pergunta 3</h3> <img className="icon marginr" src="../images/Vector.svg />`,
        `<h3 className="marginl">Pergunta 4</h3> <img className="icon marginr" src="../images/Vector.svg />`,
    ]
    
    console.log("hidden2: " + props.hidden2)
    
    return(
        <>
        <div className={props.hidden2}>
        <div className="fachada">
       <img className="sublogo" src="../images/logo.png" />
       <h1>ZapRecall</h1>
       </div>

       <div className="question margint">
       <Question num={1} />  
       </div>

       <div className="question margint">
       <Question num={2} />
       </div>

       <div className="question margint">
       <Question num={3} />
       </div>

       <div className="question margint yellow">
       <Question num={4} />
       </div>
       </div>
        </>
    )
}
