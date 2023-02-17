import React, { useEffect, useState } from 'react';

//IMPORTANDO O CSS
import '../sort.css'


export default class Merge extends React.Component {
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
        this.sort = this.sort.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.merge = this.merge.bind(this);
        this.setData = this.setData.bind(this);
        this.setArray = this.setArray.bind(this);
    }

    async sort() {
        if (!this.state.sorted && !this.state.startSorting) {
            this.setState(() => ({
                startSorting: true,
            }));
            
            await this.mergeSort(-1, this.state.array.length-1)

            if (this.state.array[this.state.array.length-2] > this.state.array[this.state.array.length-1]) {
                let data = this.state.array;
                let aux = data[data.length - 1];
                data[data.length-1] = data[data.length-2];
                data[data.length-2] = aux;
                this.setState(() => ({
                    array: data,
                }));
            }

            this.setState(() => ({
                sorted: true,
            }));

            this.setColors();
        }
    }
      
    async mergeSort(left, right) {
        if (left >= right) {
            return;
        }
        
        let mid = Math.floor((left + right) / 2);
        await this.mergeSort(left, mid);
        await this.mergeSort(mid + 1, right);
        
        await this.merge(left, mid, right);
    }
      
    async merge(left, mid, right) {

        // transfere os elementos entre left e right para um array auxiliar.
        let helper = new Array(this.state.array.length);
        for (let i = left; i <= right; i++) {
            helper[i] = this.state.array[i];
        }
        
        let i = left;
        let j = mid + 1;
        let k = left;
        
        while (i <= mid && j <= right) {
            
            if (helper[i] <= helper[j]) {
                let arr = this.state.array;
                arr[k] = helper[i]
                this.setState(
                    () => ({
                        array: arr
                    })
                )
                await new Promise(resolve => setTimeout(resolve, 1));
                i++;
            } else {
                let arr = this.state.array;
                arr[k] = helper[j]
                this.setState(
                    () => ({
                        array: arr
                    })
                )
                await new Promise(resolve => setTimeout(resolve, 1));
                j++;
            }
            k++;    
            
        }
        
        // se a metade inicial não foi toda consumida, faz o append.
        while (i <= mid) {
            let arr = this.state.array;
            arr[k] = helper[i]
            this.setState(
                () => ({
                    array: arr
                })
            )
            await new Promise(resolve => setTimeout(resolve, 1));
            i++;
            k++;
        }
        
        // se a metade final não foi toda consumida, faz o append.
        while (j <= right) {
            let arr = this.state.array;
            arr[k] = helper[j]
            this.setState(
                () => ({
                    array: arr
                })
            )
            await new Promise(resolve => setTimeout(resolve, 1));
            j++;
            k++;
        }
    }
      
      
    async setColors() {
        let items = document.querySelectorAll("#merge .item");
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
        let items = document.querySelectorAll("#merge .item");
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
            <div className='sort blue' id='merge'>
                <h2 className='blue'>Merge Sort</h2>
                <div className="sortContainer">
                    <button onClick={this.sort} className="buttonSort">{this.state.sorted ? "Sorted" : `${this.state.startSorting ? "Sorting..." : "Start Sorting"}`}</button>
                    {this.state.sorted ? <button onClick={this.setData} className="buttonSort um">Regenerate</button> : ""}

                    {this.state.array.map((item,index) => {
                        return(
                            <div className='item' data-size={item} data-index={index} style={{"top": `${100 - item - 1}%`,"left": `${index}%`}}></div>
                        )
                    })}
                </div>
                <div className="sortInfo">
                    <h3>Características</h3>
                    <ul>
                        <li><p><strong>Estabilidade: </strong>o Merge Sort é um algoritmo estável, ou seja, mantém a ordem relativa de elementos iguais. Isso significa que se existem dois elementos iguais no array, eles manterão a mesma ordem após a ordenação.</p></li>
                        <li><p><strong>Eficiência: </strong>o tempo de execução do Merge Sort é O(n log n) no pior caso, onde n é o número de elementos do array. Isso significa que, mesmo para grandes conjuntos de dados, o algoritmo é relativamente rápido e eficiente.</p></li>
                        <li><p><strong>Consumo de memória: </strong> a implementação padrão do Merge Sort requer um espaço adicional no array para armazenar os elementos ordenados antes de serem mesclados. Isso significa que o algoritmo consome mais memória do que outros algoritmos de ordenação, especialmente para arrays muito grandes.</p></li>
                        <li><p><strong>Capacidade de ordenar listas encadeadas: </strong>diferentemente de alguns outros algoritmos de ordenação, como o QuickSort, o Merge Sort pode ser facilmente adaptado para ordenar listas encadeadas.</p></li>
                        <li><p><strong>Mescla ordenada:</strong> a etapa de mesclagem no Merge Sort é feita em arrays já ordenados, o que torna a etapa de mesclagem mais simples e eficiente.</p></li>
                        <li><p>Em geral,<strong>o Merge Sort é uma ótima escolha quando é preciso ordenar grandes conjuntos de dados</strong> , especialmente quando a estabilidade é importante.</p></li>
                    </ul>
                </div>
                <div className="code">
                    <h3>Código (em JAVASCRIPT)</h3>
                    <div className='sourceCode'>
                        <pre>
{`function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`}
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}