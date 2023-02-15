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
                <a href="https://github.com/gabrieldantasoli" target="_blank" data-color="red">My Github</a>
            </nav>
        </div>
    )
}