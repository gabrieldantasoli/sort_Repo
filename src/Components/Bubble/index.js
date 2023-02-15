import React, { useEffect, useState } from 'react';

//IMPORTANDO O CSS
import '../sort.css'


export default class Bubble extends React.Component {
    constructor() {
        super();
        this.state = {
            array: [1,2],
            sorted: false,
            startSorting: false,
            current: 0,
            currentPlus: 1
        }
        this.bubbleSort = this.bubbleSort.bind(this);
        this.setData = this.setData.bind(this);
        this.setArray = this.setArray.bind(this);
    }

    async bubbleSort() {
        if (!this.state.sorted && !this.state.startSorting) {
          this.setState(
            () => ({
              startSorting: true,
            })
          );
      
          let data = this.state.array;
          let isSorted = false;
          let iteration = 1;
      
          while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < data.length - iteration; i++) {
                if (data[i] > data[i + 1]) {
                    let aux = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = aux;
                    isSorted = false;
                }
            }
      
            // Espera um tempo entre cada iteração
            await new Promise(resolve => setTimeout(resolve, 100));
      
            this.setArray(data);
      
            iteration++;
          }
      
          this.setState(
            () => ({
              sorted: true,
            })
          );
        }
      }
      

    setArray(data) {
        this.setState(
            () => ({
                array: data
            })
        )
    }

    setData() {
        this.setState(
            () => ({
                sorted: false,
                startSorting: false,
            })
        )
        let data = [];
        for (let i = 0; i < 100; i++) {
            let num = Math.floor(Math.random() * 100);
            data.push(num);
        }

        this.setState(
            (state) => ({
                array: data,
            })
        )
    }

    componentDidMount() {
        this.setData();
    }

    render() {
        return(
            <div className='sort red' id='bubble'>
                <h2 className='red'>Bubble Sort</h2>
                <div className="sortContainer">
                    <button onClick={this.bubbleSort} className="buttonSort">{this.state.sorted ? "Sorted" : `${this.state.startSorting ? "Sorting..." : "Start Sorting"}`}</button>
                    {this.state.sorted ? <button onClick={this.setData} className="buttonSort um">Regenerate</button> : ""}

                    {this.state.array.map((item,index) => {
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
}

/*class Bubble extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = "HRV";
        this.state = {
            ligado: false,
            velAtual: 0,
        }
        this.ld = this.mudar.bind(this);
        this.acelerar = this.acelerar.bind(this);
    }

    mudar() {
        //this.setState({ligado: !this.state.ligado})
        this.setState(
            (state) => ({
                ligado: !state.ligado,
            })
        )
    }

    acelerar() {
        this.setState(
            (state,props) => ({
                velAtual: state.ligado ? state.velAtual + props.fator : 0
            })
        )
    }


    componentDidMount() {
        alert("Componente Montado")
    }

    componentDidUpdate() {
        alert("Dados Atualisados")
    }

    // Parar de ser renderizado
    componentWillUnmount() {
        alert("Removido")
    }


    render() {
        return(
            <div>
                <h1>Componente de classe</h1>
                <p>{this.props.name}</p>
                <p>{this.modelo}</p>
                <p>{this.state.ligado ? "Ligado" : "Desligado"}</p>
                <p>{this.state.velAtual}</p>
                <button onClick={this.ld}>Mudar</button>
                <button onClick={this.acelerar}>aclr</button>
            </div>
           
        )
    }
}

export default Bubble;*/

/*export default () => {

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
    setArray(data);
    alert(data)
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
            {array}
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
}*/