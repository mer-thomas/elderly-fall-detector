import React from 'react'
import { useEffect, useState } from "react";

const URL ="https://www.programmableweb.com/api/covid-19-india";

const getUpdate = async () =>{
    const response = await fetch(URL);
    const body =await response.json();
    return body.url;
};

export const App = () => {

    const[url,setUrl]= useState(null);

    const onClickHandler = async() => {
        const url= await getUpdate();
        setUrl(url);

    };

    useEffect(()=> {
        onClickHandler();
    },[]);


    return ( <div>
        <button onClick={onClickHandler}>Updated Readings</button>
        <span>{url}</span>
        <image src= {url} />
    </div>
    ) ;
};