import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CardSerie from "../../components/card/Card.jsx"


export default function Films(){

    const[series, setSeries] = useState([])

    useEffect( () => load(), [] )

    async function load(){
        try{
        const resp = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=f0631af9473473787ed1bf8bb671b55f&language=pt-BR&page=1");
        setSeries(resp.data.results)
        console.log(resp.data.results)
    }catch(erro){
        console.log(erro)
        }
}
    return(
        <Fragment>
            <div className="content">
        {series.map( (serie) => <CardSerie serie={serie}/>)}

    </div>
    </Fragment>
    );       
}
