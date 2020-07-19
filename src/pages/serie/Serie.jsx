import React, { Fragment, useEffect, useState } from 'react'
import api, {api_options } from "../../services/api"

import "./Serie.css"

export default function Serie(props){

    const {serieId} = props.match.params
    const[series, setSeries] = useState([])
    const[genres, setGenres] = useState([])
    const imgBaseUrl = "https://image.tmdb.org/t/p/w300/"
    const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/"
   
    useEffect( () => {load()}, [] )

    async function load(){
        try{
            const resp = await api.get(`tv/${serieId}`, api_options())
            setSeries(resp.data)
            setGenres(resp.data.genres)
            console.log(resp.data)
        }catch(erro){
            console.log(erro)
            }
}
    return(
    <Fragment>
        <div className="hero">
            <div 
            className="bg"
            style={{ backgroundImage: `url(${imgBgBaseUrl}${series.backdrop_path})`
            }}
            >
            </div>
            <button className="btn-back" onClick={props.history.goBack}>
                <span className="material-icons">navigate_before</span>
                voltar
            </button>
            <img src={`${imgBaseUrl}${series.poster_path}`} alt="poster" />
            <div className="serie-info">
                <h1>{series.name}</h1>
                <div className="score">
                    <span className="material-icons">grade</span>
                    {series.vote_average}
                </div>
                <p className="genres">
                    {genres.map(genero=>{return genero.name + ' | ' })}
                </p>
                <p>{series.overview}</p>
            </div>
        </div>
    </Fragment>
    );       
}
