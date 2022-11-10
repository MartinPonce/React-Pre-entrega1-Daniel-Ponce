import React, { useEffect, useState } from "react";

export default function TestPokeApi() {
    const [arrayDePokes, setArrayDePokes] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then((res) => res.jsom())
            .then((resJson) => {
                console.log(resJson);
                setArrayDePokes(resJson.results);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                console.log("ya termino todo!");
              });
        }, []);
        
    return (
        <div>
            {arrayDePokes.map((item, i) => (
            <div key={item.name}>
               <h2>{item.name}</h2>
               <p>url = {item.url}</p>
            </div>
            ))}
        </div>
    );
}