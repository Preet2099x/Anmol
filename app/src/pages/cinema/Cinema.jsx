import React from 'react'
import './Cinema.scss'
import cinemaImg from '../../assets/cinema.jpg'

const Cinema = () => {
  return (
    <div className="cinema">
        <h1>CINEMA</h1>
        <div className='sections'>
            <div className='section1'>
                <p>Films</p>
                <p>Short Films</p>
            </div>
            <div className='section2'>
                <p>Series</p>
                <p>Documentaries</p>
            </div>
        </div>
    </div>
  )
}

export default Cinema
