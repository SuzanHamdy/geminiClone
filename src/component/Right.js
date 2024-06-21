
import React, { useContext } from 'react'
import './geminiapi'
import './Right.css'
import logo from './image/user_icon-BYrw3k3X.png'
import card1 from './image/download (7).png'
import card2 from './image/download (8).png'
import card3 from './image/download (9).png'
import card4 from './image/download (11).png'
import ip1 from './image/gallery_icon-DX7cOO5y.png'
import ip2  from './image/download (10).png'
import ip3 from './image/ad.png'
import result from './image/download.png'
import { context } from '../context'


export default function Right() {


const { onSent , recent , showresult , input , setinput , resultdata , search1 ,search2 ,search3 ,search4 ,loading } = useContext(context)

  return (
    <div  className='right'>
      <header className='flex header' >
       <p> Gemini</p>
       <img src ={logo} />
      </header>
      <div className='all'>
      <section className='search'>
       
       {!showresult ?
       <>
         <p className='p'> <p>Hello, Dev.</p>How can I help you today?</p>
        <div className='cards '>
          <div onClick={() => search1()}  className='card '>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={card1}  />
          </div>
          <div onClick={() => search2()} className='card '>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={card2}  />
          </div>
          <div onClick={() => search3()} className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={card3}  />
          </div>
          <div onClick={() => search4()} className='card'>
            <p>Tell me about React js and React native</p>
            <img src={card4}  />
          </div>
        </div>
       </>
       : <div className='result'>
        <div className='result-up flex'>
          <img src={logo} />
          <p> {recent} </p>
        </div>
        <div className='result-down flex'>
          <img src={result} />
          {
            loading?<>
            <div className='load flex'>
             <hr/>
             <hr/>
             <hr/>

            </div> 
            </> : <p > {resultdata} </p>
          }
         

        </div>

       </div>
      }
      </section>
      <section className='bottom  '>
       <div className='input flex'>
        <input onChange={(e) => setinput(e.target.value)} value={input}     type='text' placeholder='Enter Aprompt Here ...' autoFocus/>
        <div className='photo flex'>
          <img src= {ip1}      />
          <img src= {ip2}      />
          {input?  <img  onClick={() => onSent()}    src={ ip3} /> :null}
        </div>
       </div>
       <p className='pp'> Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
      </section>
      </div>
    </div>
  )
}
