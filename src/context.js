import { createContext, useState } from "react";
import runChat from "./component/geminiapi";
import { ChatSession } from "@google/generative-ai";

export const context =createContext();

const ContextProvider =(props) =>{
const [input , setinput] = useState ("");
const [recent , setrecent] = useState("");
const [prevprompt , setprevprompt] = useState([]);
const [showresult , setshowresult] = useState(false);
const [ loading , setloading] =useState(false);
const [ resultdata , setresultdata] = useState("");
     
     const search1 = async (prompt)=>{
      setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecent("Suggest beautiful places to see on an upcoming road trip")
        const result = await runChat("Suggest beautiful places to see on an upcoming road trip");
      
      setresultdata( result)
      setloading(false)
     }
     const search2 = async (prompt)=>{
      setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecent("Briefly summarize this concept: urban planning")
        const result = await runChat("Briefly summarize this concept: urban planning");
      
      setresultdata( result)
      setloading(false)
     }
     const search3 = async (prompt)=>{
      setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecent("Brainstorm team bonding activities for our work retreat")
        const result = await runChat("Brainstorm team bonding activities for our work retreat");
      
      setresultdata( result)
      setloading(false)
     }
     const search4 = async (prompt)=>{
      setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecent("Tell me about React js and React native")
        const result = await runChat("Tell me about React js and React native");
      
      setresultdata( result)
      setloading(false)
     }
              const newChat = ()=>{
                setloading(false)
                setshowresult(false)
              }
const onSent = async (prompt) => {
setresultdata("")
setloading(true)
setshowresult(true)
setrecent(input)
setprevprompt( prev =>[...prev , input])
  const response=  await runChat(input)
  setresultdata(response)
  setloading(false)
  setinput("")
}
const contextValue ={
prevprompt ,
setprevprompt ,
onSent ,
recent ,
setrecent ,
showresult ,
input ,
setinput ,
resultdata ,
loading ,
newChat,
search1,
search2,
search3,
search4
}

return(
    <context.Provider value={contextValue}>
{props.children}



    </context.Provider>




)




}



export default ContextProvider;








