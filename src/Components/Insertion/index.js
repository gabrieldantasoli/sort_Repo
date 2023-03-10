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
        this.InsertionSort = this.InsertionSort.bind(this);
        this.setData = this.setData.bind(this);
        this.setArray = this.setArray.bind(this);
    }

    async InsertionSort() {
        if (!this.state.sorted && !this.state.startSorting) {
            this.setState(
                () => ({
                    startSorting: true,
                })
            );
        
            let data = this.state.array;

            for (let i = 1; i < data.length; i++) {
                let j = i;

                while (j > 0 && data[j] < data[j-1]) {
                    let aux = data[j];
                    data[j] = data[j-1];
                    data[j-1] = aux;
                    j -= 1;
                    await new Promise(resolve => setTimeout(resolve,0.1));
                    this.setArray(data);
                }
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
        let items = document.querySelectorAll("#insertion .item");
        for (let i = 0; i < items.length; i++) {
            items[i].style.background = this.colors[i];
            await new Promise(resolve => setTimeout(resolve, 10));
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
        let items = document.querySelectorAll("#insertion .item");
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
            <div className='sort yellow' id='insertion'>
                <h2 className='yellow'>Insertion Sort</h2>
                <div className="sortContainer">
                    <button onClick={this.InsertionSort} className="buttonSort">{this.state.sorted ? "Sorted" : `${this.state.startSorting ? "Sorting..." : "Start Sorting"}`}</button>
                    {this.state.sorted ? <button onClick={this.setData} className="buttonSort um">Regenerate</button> : ""}

                    {this.state.array.map((item,index) => {
                        return(
                            <div className='item' data-size={item} data-index={index} style={{"top": `${100 - item - 1}%`,"left": `${index}%`}}></div>
                        )
                    })}
                </div>
                <div className="sortInfo">
                    <h3>Caracter??sticas</h3>
                    <ul>
                        <li><p><strong>Inser????o em ordem: </strong>o Insertion Sort insere cada elemento da lista em sua posi????o correta em rela????o aos elementos que j?? foram ordenados.</p></li>
                        <li><p><strong>Eficiente em pequenas listas: </strong>o Insertion Sort ?? um algoritmo de ordena????o eficiente em pequenas listas, pois tem uma complexidade de tempo O(n^2), mas com uma constante menor do que o Bubble Sort e o Selection Sort.</p></li>
                        <li><p><strong>Pode ser est??vel: </strong>o Insertion Sort pode ser implementado como um algoritmo de ordena????o est??vel, o que significa que elementos iguais n??o s??o reorganizados durante a ordena????o.</p></li>
                        <li><p><strong>Pode ser adaptativo: </strong>o Insertion Sort pode ser implementado como um algoritmo de ordena????o adaptativo, o que significa que ele pode ser interrompido se a lista estiver quase ordenada e continuar de onde parou, o que pode melhorar a efici??ncia.</p></li>
                        <li><p><strong>F??cil de implementar: </strong>o Insertion Sort ?? um algoritmo de ordena????o f??cil de entender e implementar, o que o torna uma boa escolha para pequenas listas ou para fins educacionais.</p></li>
                        <li><p><strong>Requer mem??ria adicional m??nima: </strong>o Insertion Sort requer apenas uma quantidade m??nima de mem??ria adicional, o que o torna uma boa escolha para ordenar listas de tamanho fixo ou com restri????es de mem??ria.</p></li>
                    </ul>
                </div>
                <div className="code">
                    <h3>C??digo (em JAVASCRIPT)</h3>
                    <div className='sourceCode'>
<pre>{`function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0 && array[j] < array[j-1]) {
            swap(array, j, j -1);
            j -= 1;
        }
    }
}`}</pre>
                    </div>
                </div>
            </div>
        )
    }
}