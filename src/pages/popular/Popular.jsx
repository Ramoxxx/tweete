import React, { Fragment, useEffect, useState } from 'react'
import api, {api_options } from "../../services/api"
import CardSerie from "../../components/card/Card.jsx"

export default function Popular(){

    const[series, setSeries] = useState([])
    
   
    useEffect( () => {load()}, [] )

    async function load(){
        try{
            const resp = await api.get("tv/popular", api_options())
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
