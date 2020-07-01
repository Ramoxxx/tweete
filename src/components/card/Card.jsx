
import React from 'react';
import './Card.css'

export default function CardSerie({ serie }) {
    const nota = serie.vote_average.toFixed(1)
    const imgUrl = "https://image.tmdb.org/t/p/w200/"
    const data = new Date(serie.first_air_date)
    const data_lancamento = data.toLocaleDateString()
  return (
    <div className="card">
      <span className="material-icons fav-btn">add_circle_outline</span>
      <div
       className="poster-image"
       style={{ backgroundImage: `url(${imgUrl}${serie.poster_path})`
       } }
       >
      </div>
      <div className="card-detail">
        <div className="score"><span className="material-icons">grade</span>
        {nota}
        </div>
  <h1 className="title">{serie.name}</h1>
  <h2>{data_lancamento}</h2>
      </div>
      <div className="button">
      <a href="#" className="btn-detail">
        <span className="material-icons">play_circle_filled</span>
        Details
      </a>
      </div>
    </div>
  );
}
