import React, { Fragment, useEffect, useState, Tab } from 'react'
import axios from 'axios'
import CardSerie from "../../components/card/Card.jsx"


export default function Search(props){

    const [series, setSeries] = useState([])
    const urlAPI= "https://api.themoviedb.org/3/search/tv" +
    props.location.search +
    "&api_key=f0631af9473473787ed1bf8bb671b55f&language=pt-BR"

    useEffect( () => {load()}, [props.location.search] )

    async function load(){
        try{
        const resp = await axios.get(urlAPI);
        setSeries(resp.data.results)
        console.log(props.location.search)
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
