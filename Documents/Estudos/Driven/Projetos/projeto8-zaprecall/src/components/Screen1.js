import React from 'react'
import Transition from './shared/Transition'


export default function Screen1(props){
    console.log("hidden1: " + props.hidden1)
    
    return(
        <>
        <div className={props.hidden1}>
        <img className="logo" src="../images/logo.png" />
        <h1>ZapRecall</h1>
        <div className="start" onClick={()=>Transition ()}>Iniciar Recall!</div>
        </div>
        </>
    )
}