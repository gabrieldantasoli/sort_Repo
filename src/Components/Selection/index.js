import { useState , useEffect } from 'react';
import '../sort.css';
import { MdChangeCircle } from 'react-icons/md';

export default () => {
    let colors = ["#0E4779","#234A8F","#3B52A3","#5457B6","#6E5EC0","#876AC3","#9F75C4","#B681C2","#CC8DBF","#E09ABA","#F2A6B4","#FDB6AD","#FEC6A5","#FED69C","#FEE68F","#FEEF7F","#FDF772","#FDF066","#FDE95B","#FDE34F","#FDDD44","#FDD73A","#FDD230","#FDCB28","#FDC51F"]
    const [array, setArray] = useState(JSON.stringify([19,-2,12,23,34,0,-4,-4,-2,3,10,37,-39,20,1,-3,-4,-23,9,25,5,-9,0,17,-27]));
    const [type, setType] = useState(null);
    const [size, setSize] = useState(0);
    const [divised, setDivised] = useState(0);
    const [unit, setUnit] = useState(0);
    const [active, setActive] = useState(false);
    const [divactive, setDivActive] = useState(0);
    const [min, setMin] = useState(0);
    const [last, setLast] = useState(24);

    useEffect(() => {
        sort(false);
    }, []);

    function sort(sort) {
        let list = JSON.parse(array);
        let listMin = list[0];
        let listMax = list[0];
        setSize(list.length);

        let divs = document.querySelectorAll('.items div');

        for (let i = 0; i < list.length-1; i++) {
            if (list[i] < listMin) {
                listMin = list[i]
            }
            if (list[i] > listMax) {
                listMax = list[i];
            }
        }

        if ((listMax <= 0 && listMin < 0)) {
            setType("top");
        } else if ((listMin >= 0 && listMax > 0)) {
            setType("bottom");
        } else {
            setType("divised");
            let divised = (100 * listMax) / (Math.abs(listMin) + Math.abs(listMax));
            setDivised(divised);
            document.getElementById("line1").style.top = `${divised}%`;
        }

        setUnit(100 / 80)

        setArray(JSON.stringify(list));
    }

    function sortTime(index,list) {
        setMin(0)
        let divs = document.querySelectorAll(".items1 div");
        let orded = true;
        let max = 0;
        for (let a = 0; a < index+1; a++) {
            setTimeout(function () {
                setDivActive(a)
                if (list[a] >= list[max]) {
                    max = a;
                    setMin(a)
                }
                if (list[a] > list[a+1]) {
                    orded = false;
                }
            }, 200 * a);
        }
        setTimeout(() => {
            if (!orded) {
                let aux = list[max];
                list[max] = list[index];
                list[index] = aux;     
                setArray(JSON.stringify(list));
                setLast(index-1);
                sortTime(index-1,list)
            }
            if (orded) {
                for (let i = 0; i < 25; i++) {
                    divs[i].style.backgroundColor = colors[i]
                }
            }
        },(index+1)*200)
    }

    function changeArray(item,index) {
        let list = JSON.parse(array);
        list[index] = item;
        document.querySelectorAll(".items div")[index].setAttribute("data-h",item);
        setArray(JSON.stringify(list));
    }

    return(
        <div className="sort bubble" id='selection'>
            <div className="container">
            <button onClick={() => sortTime(24,JSON.parse(array))}>sort</button>
                <div className="name" data-color="green">selection</div>
                
                <div className="container_items">
                    <div id='line1' className={type === "bottom" ? "bottom" : (type === "top" ? "top" : "divised")}>
                        
                    </div>

                    <div className='items1'>
                            {JSON.parse(array).map((item,index) => {
                                return(
                                    <div className='item' style={{"width": `${100 / size}%`,"backgroundColor": `${min === index ? "blue" : `${divactive === index ? "red": `${last < index ? colors[index] : "yellow"}`}`}`,"position": "absolute","top": `${item >= 0 ? `${divised-item*unit}%` : `calc(${divised}% + 4px)`}`,"left": `${index * (100 / size)}%`,"height": `${item === 0 ? "0px" : `${Math.abs(item)*unit}%`}`,"border": "1px solid #000"}} data-h={item}>
                                       
                                    </div>
                                )
                            })}
                        </div>
                    
                </div>
            </div>
        </div>
    )
}