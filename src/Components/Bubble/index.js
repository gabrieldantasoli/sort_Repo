import { useState , useEffect } from 'react';
import '../sort.css';
import { MdChangeCircle } from 'react-icons/md';

export default () => {
    const [array, setArray] = useState(JSON.stringify([19,-2,12,23,34,0,-4,-4,-2,3,10,37,-39,20,1,-3,-4,-23,9,25,5,-9,0,17,-27]));
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [type, setType] = useState(null);
    const [size, setSize] = useState(0);
    const [divised, setDivised] = useState(0);
    const [unit, setUnit] = useState(0);

    useEffect(() => {
        sort(false);
    }, []);

    function sort(sort) {
        let list = JSON.parse(array);
        let listMin = list[0];
        let listMax = list[0];
        setSize(list.length);

        for (let i = 0; i < list.length-1; i++) {
            if (list[i] < listMin) {
                listMin = list[i]
            }
            if (list[i] > listMax) {
                listMax = list[i];
            }

            if (sort) {
                for (let a = 0; a < list.length-1 - i; a++) {
                    if (list[a] > list[a+1]) {
                        let aux = list[a];
                        list[a] = list[a+1];
                        list[a+1] = aux;
                    }
                }
            }
            
        }
        
        setMin(listMin);
        setMax(listMax);

        if ((listMax <= 0 && listMin < 0)) {
            setType("top");
        } else if ((listMin >= 0 && listMax > 0)) {
            setType("bottom");
        } else {
            setType("divised");
            let divised = (100 * listMax) / (Math.abs(listMin) + Math.abs(listMax));
            setDivised(divised);
            document.getElementById("line").style.top = `${divised}%`;
        }

        setUnit(100 / 80)

        setArray(JSON.stringify(list));
    }


    function changeNums() {
        
    }

    function changeArray(item,index) {
        let list = JSON.parse(array);
        list[index] = item;
        setArray(JSON.stringify(list));
    }

    return(
        <div className="sort bubble" id='bubble'> 
            <div className="container">
                <div className="name" data-color="red">Bubble</div>
                <button className='change' onClick={changeNums}><MdChangeCircle className='cg' /></button>
                <div className="changeData">
                    <label>Novos Valores</label>
                    <div className='newValues'>
                        {JSON.parse(array).map((item,index) => {
                            return(
                                <input type="number" value={item} max={40} min={-40} onChange={(e) => changeArray(e.target.value,index)} />
                            )
                        })}
                    </div>
                </div>
                
                <div className="container_items">
                    <div id='line' className={type === "bottom" ? "bottom" : (type === "top" ? "top" : "divised")}>
                        
                        
                    </div>

                    <div className='items'>
                            {JSON.parse(array).map((item,index) => {
                                return(
                                    <div className='item' style={{"width": `${100 / size}%`,"backgroundColor": "yellow","position": "absolute","top": `${item >= 0 ? `${divised-item*unit}%` : `calc(${divised}% + 4px)`}`,"left": `${index * (100 / size)}%`,"height": `${item > 0 ? `${item*unit}%` : `${item === 0 ? "4px" : `${-1*item*unit}%`}`}`,"border": "1px solid #000"}}>
                                       {console.log(unit)}
                                    </div>
                                )
                            })}
                        </div>
                    
                </div>
            </div>
        </div>
    )
}