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
        this.colors = ["#ff0000", "#ff1100", "#ff2200", "#ff3000", "#ff3300", "#ff4400", "#ff5500", "#ff6600", "#ff7700", "#ff8800", "#ff9900", "#ffaa00", "#ffaa00", "#ffbb00", "#ffcc00", "#ffdd00", "#ffee00", "#ffff00", "#eeff00", "#ddff00","#efff00", "#ccff00", "#bbff00", "#aaff00", "#99ff00", "#88ff00", "#77ff00", "#66ff00", "#55ff00", "#44ff00", "#33ff00", "#22ff00", "#11ff00", "#00ff00", "#00ff11", "#00ff22", "#00ff33", "#00ff33", "#00ff44", "#00ff55", "#00ff66", "#00ff77", "#00ff88", "#00ff99", "#00ffaa", "#00ffbb", "#00ffbd", "#00ffcc", "#00ffdd", "#00ffee", "#00ffff", "#00eeff", "#00ddff", "#00ccff", "#00bbff", "#00aaff", "#0099ff", "#0088ff", "#0077ff", "#0066ff", "#0055ff", "#0044ff","#0044ff", "#0033ff", "#0022ff", "#0011ff", "#0000ff","#0000ff", "#1100ff", "#2200ff", "#3300ff", "#4400ff", "#5500ff", "#6600ff", "#7700ff", "#8800ff","#8800ff", "#9900ff", "#aa00ff", "#bb00ff", "#cc00ff", "#dd00ff", "#ee00ff", "#ff00ff", "#ff00ee", "#ff00dd", "#ff00cc", "#ff00bb", "#ff00aa", "#ff0099","#ff0099", "#ff0088", "#ff0077", "#ff0066", "#ff0055", "#ff0044", "#ff0033", "#ff0022", "#ff0011", "#ff0000"];
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
            // Espera um tempo entre cada iteração
            await new Promise(resolve => setTimeout(resolve, 0.1));
            this.setArray(data);
        }
    
        iteration++;
        }

        this.setColors();
          
        this.setState(
            () => ({
              sorted: true,
            })
          );
        }
    }

    async setColors() {
        let items = document.querySelectorAll("#bubble .item");
        for (let i = 0; i < items.length; i++) {
            items[i].style.background = this.colors[i];
            await new Promise(resolve => setTimeout(resolve, 1));
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
        let items = document.querySelectorAll("#bubble .item");
        for (let i = 0; i < items.length; i++) {
            items[i].style.background = "#121212";
        }
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
                    <h3>Características : </h3>
                    <ul>
                        <li><p><strong>Comparação de elementos adjacentes.</strong></p></li>
                        <li><p><strong>Ineficiência em grandes listas:</strong> complexidade de tempo quadrática O(n^2).</p></li>
                        <li><p><strong>Estável:</strong> o Bubble Sort é um algoritmo de ordenação estável, o que significa que elementos iguais não são reorganizados durante a ordenação.</p></li>
                        <li><p><strong>Fácil de implementar:</strong> o Bubble Sort é um algoritmo de ordenação fácil de entender e implementar, o que o torna uma boa escolha para pequenas listas ou para fins educacionais.</p></li>
                        <li> <p><strong>Otimização:</strong> O código abaixo é uma boa otimização do Bubble sort , pois reduz o número de iterações necessárias para ordenar a lista, pois se a lista já estiver ordenada, o algoritmo não precisa continuar iterando. Isso pode ser particularmente útil em casos em que a lista já está quase ordenada ou quando o tamanho da lista é muito grande, o que pode economizar tempo e tornar o algoritmo mais eficiente.</p></li>
                        <li> <p><strong>Requer memória adicional mínima:</strong> o Bubble Sort requer apenas uma quantidade mínima de memória adicional, o que o torna uma boa escolha para ordenar listas de tamanho fixo ou com restrições de memória.</p></li>
                    </ul>
                </div>
                <div className="code">
                    <h3>Código (em JAVASCRIPT)</h3>
                    <div className='sourceCode'>
<pre>{`function bubbleSort() {
    let isSorted = false;
    let iteration = 0;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - iteration; i++) {
            if (array[i] > array[i+1]) {
                swap(array, i, i+1);
                isSorted = false;
            }
        }
    }
}`}</pre>
                    </div>
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