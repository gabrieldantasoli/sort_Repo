import { useState } from "react"
import { BiSortUp } from 'react-icons/bi';
import './header.css';


export default () => {
    const [sortIndex, setSortIndex] = useState(0);

    let sorts = [["bubble","#F23030ed"],["selection","#267365"],["insertion","#F2CB05"]]

    function changeSort() {
        if (sortIndex >= sorts.length -1) {
            setSortIndex(0);
        } else {
            setSortIndex(sortIndex + 1);
        }
    }

    setTimeout(changeSort,3000)

    return(
        <div className="header" id="header">
            <div className="logo">
                Sort_<span style={{"color": `${sorts[sortIndex][1]}`}}>{sorts[sortIndex][0]}</span>
                <BiSortUp className="svg" />
            </div>

            <nav>
                <a href="#bubble" data-color="red">Bubble</a>
                <a href="#selection" data-color="green">selection</a>
                <a href="#insertion" data-color="yellow">Insertion</a>
            </nav>
        </div>
    )
}