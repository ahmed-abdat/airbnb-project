import React from 'react'
import Card from './Card'
import data from './data'

function Main() {
    const cards = data.map((el,index)=> {
        return (
            <Card {...el} key={index} />
        )
    })
   
  return (
    <section className='main media-scroller'>
       {cards}
    </section>
  )
}

export default Main