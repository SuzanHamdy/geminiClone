
import React, { useContext, useState } from 'react'
import imgg from './image/download (3).png'
import imgi from './image/download (4).png'
import imgm from './image/download (6).png'
import im from './image/download (1).png'
import img10 from './image/download (2).png'
import img19 from './image/download19.png'
import { context } from '../context'

const Left = () => {
  const [clk , setclk] = useState(false)
  const{  onSent ,prevprompt , setrecent ,newChat } =useContext(context)
  return (
    <div  className=' flex  left'>
        <section className='up'>
        <img src={im} onClick={()=> { setclk(left=>!left)}} /> <br/>
        <button onClick={() => newChat()}>
        <img src={img10} />
       {clk? <span> new chat</span> :null}
        </button>
       { clk? <p className='p'> <p>recent</p>
       {prevprompt.map(( item , index)=> {
         return(
          <div>
          <img src={img19}  />
          <span> {item.slice(0 , 15)} .... </span>
         </div>
         )
       })}
      
        </p> :null}
      </section>
      <section  className='down flex'>
        <div className='flex'>
          <img  src={imgg} />
         {clk? <span> help</span>:null}
        </div>
        <div className='mid flex'>
          <img  src={imgi} />
          {clk?<span> activity</span>:null}
        </div>
        <div className='flex'>
          <img  src= {imgm} />
          {clk?<span> settings</span> :null}
        </div>
      </section>




    </div>
  )
}

export default Left ;
