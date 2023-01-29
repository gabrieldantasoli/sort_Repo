import '../sort.css';
import { MdChangeCircle } from 'react-icons/md';

export default () => {
    return(
        <div className="sort bubble" id='selection'>
            <div className="container">
                <div className="name" data-color="green">Selection</div>
                <div className='change'><MdChangeCircle className='cg'/></div>

                <div className="container_items">
                    
                </div>
            </div>
        </div>
    )
}