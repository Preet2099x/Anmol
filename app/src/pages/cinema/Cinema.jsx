import React from 'react'
import './Cinema.scss'
import cinemaImg from '../../assets/cinema.jpg'

const Cinema = () => {
  return (
    <div className="cinema">
        <h1>CINEMA</h1>
        <ul>
          <li>Films</li>
          <li>Short Films</li>
          <li>Series</li>
          <li>Documentaries</li>
        </ul>
    </div>
  )
}

export default Cinema
