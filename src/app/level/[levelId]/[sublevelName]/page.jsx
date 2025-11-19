import React, {useState} from "react";
import levels from "@/data/levels";
import Header from "@/components/Header/Header"

export default function SublevelPage({ params }) {
    //obtenemos los valores de la URL
    const {levelId, sublevelName} = params; //la primera variable guarda el primer tramo dinámico 
    //de la url, el segundo guarda el sublevelname de la url

    //buscamos el nivel 
    const level = levels.find(l => l.level === Number(levelId));

    if (!level) return <p>Level not found</p>;

    //buscamos el subnivel
    const sublevel = level.sublevels.find(sublevel => sublevel.name === sublevelName)

    if(!sublevel) return <p>Sublevel not found</p>    

    return (
        <>
        <Header>
        </Header>
        </>
    )
}