import React, { Fragment, useEffect, useState, Tab } from 'react'
import api, {api_options} from '../../services/api'
import CardSerie from "../../components/card/Card.jsx"


export default function Search(props){

    const [series, setSeries] = useState([])
    const urlAPI= "/search/tv" + props.location.search

    useEffect( () => {load()}, [props.location.search] )

    async function load(){
        try{
        const resp = await api.get(urlAPI, api_options());
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
