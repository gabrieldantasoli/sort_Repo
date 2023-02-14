import React, { useEffect, useState } from 'react';

//IMPORTANDO O CSS
import '../sort.css'

export default () => {
    let [array, setArray] = useState([]);

    useEffect(() => {
        function setData() {
            let aux = [];
            for (let i = 0; i < 100; i++) {
                let num = Math.floor(Math.random() * 100);
                aux.push(num);
            }
            setArray(aux);
        }

        setData();
    },[]);

    return (
        <div className='sort green' id='selection'>
            <h2 className='green'>Selection Sort</h2>
            <div className="sortContainer">
                {array.map((item,index) => {
                    return(
                        <div className='item' data-size={item} data-index={index} style={{"top": `${100 - item - 1}%`,"left": `${index}%`}}></div>
                    )
                })}
            </div>
            <div className="sortInfo">
                <h3>Informações</h3>
            </div>
        </div>
    )
}