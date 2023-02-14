import React, { useEffect, useState } from 'react';

//IMPORTANDO O CSS
import '../sort.css'

export default () => {

    let [array , setArray] = useState([]);
    let [loaded , setloaded] = useState(false);

function bubble() {
    let data = array;
    let isSorted = false;
    let iteration = 0;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < data.length - 1 - iteration; i++) {
            if (data[i] > data[i+1]) {
                let aux = data[i];
                data[i] = data[i+1]
                data[i+1] = aux
                isSorted = false;
            }
        }
    }

        console.log(data);
        
        setArray(data);
    }

    function setData() {
        let aux = [];
        for (let i = 0; i < 100; i++) {
            let num = Math.floor(Math.random() * 100);
            aux.push(num);
        }
        setArray(aux);
    }

    useEffect(() => {
        if (!loaded) {
            setData();
            setloaded(true);
        }
        
    },[]);

    return (
        <div className='sort red' id='bubble'>
            <button onClick={bubble}>start</button>
            <h2 className='red'>Bubble Sort</h2>
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