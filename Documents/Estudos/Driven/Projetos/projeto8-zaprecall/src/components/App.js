
import "../css/reset.css"
import "../css/estilo.css"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Footer from "./Footer"
import Transition from "./shared/Transition"




export default function App(){
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
    

    return(
        <>
       <Screen1 />
       <Screen2 />
       <Footer />
        </>

    )
}