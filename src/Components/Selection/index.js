import React, { useEffect, useState } from 'react';

//IMPORTANDO O CSS
import '../sort.css'


export default class Selection extends React.Component {
    constructor() {
        super();
        this.state = {
            array: [1,2],
            sorted: false,
            startSorting: false,
            current: 0,
            currentPlus: 1,
            active: 0
        }
        this.colors = ["#ff0000", "#ff1100", "#ff2200", "#ff3000", "#ff3300", "#ff4400", "#ff5500", "#ff6600", "#ff7700", "#ff8800", "#ff9900", "#ffaa00", "#ffaa00", "#ffbb00", "#ffcc00", "#ffdd00", "#ffee00", "#ffff00", "#eeff00", "#ddff00","#efff00", "#ccff00", "#bbff00", "#aaff00", "#99ff00", "#88ff00", "#77ff00", "#66ff00", "#55ff00", "#44ff00", "#33ff00", "#22ff00", "#11ff00", "#00ff00", "#00ff11", "#00ff22", "#00ff33", "#00ff33", "#00ff44", "#00ff55", "#00ff66", "#00ff77", "#00ff88", "#00ff99", "#00ffaa", "#00ffbb", "#00ffbd", "#00ffcc", "#00ffdd", "#00ffee", "#00ffff", "#00eeff", "#00ddff", "#00ccff", "#00bbff", "#00aaff", "#0099ff", "#0088ff", "#0077ff", "#0066ff", "#0055ff", "#0044ff","#0044ff", "#0033ff", "#0022ff", "#0011ff", "#0000ff","#0000ff", "#1100ff", "#2200ff", "#3300ff", "#4400ff", "#5500ff", "#6600ff", "#7700ff", "#8800ff","#8800ff", "#9900ff", "#aa00ff", "#bb00ff", "#cc00ff", "#dd00ff", "#ee00ff", "#ff00ff", "#ff00ee", "#ff00dd", "#ff00cc", "#ff00bb", "#ff00aa", "#ff0099","#ff0099", "#ff0088", "#ff0077", "#ff0066", "#ff0055", "#ff0044", "#ff0033", "#ff0022", "#ff0011", "#ff0000"];
        this.selectionSort = this.selectionSort.bind(this);
        this.setData = this.setData.bind(this);
        this.setArray = this.setArray.bind(this);
    }

    async selectionSort() {
        if (!this.state.sorted && !this.state.startSorting) {
          this.setState(
            () => ({
              startSorting: true,
            })
          );

          let data = this.state.array;

          for (let i = 0; i < data.length; i++) {
            let menor = i;

            for (let j = menor; j < data.length; j++) {
                if (data[j] < data[menor]) {
                    menor = j;
                    this.setState(
                        () => ({
                            active: menor,
                        })
                      );
                }
                // Espera um tempo entre cada iteração
                await new Promise(resolve => setTimeout(resolve, 0.1));
            }

            let aux = data[i];
            data[i] = data[menor];
            data[menor] = aux;

            this.setArray(data);
          }

          this.setColors();
      
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

    async setColors() {
        let items = document.querySelectorAll("#selection .item");
        for (let i = 0; i < items.length; i++) {
            items[i].style.background = this.colors[i];
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    setData() {
        let items = document.querySelectorAll("#selection .item");
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
            <div className='sort green' id='selection'>
                {this.active}
                <h2 className='green'>Selection Sort</h2>
                <div className="sortContainer">
                    <button onClick={this.selectionSort} className="buttonSort">{this.state.sorted ? "Sorted" : `${this.state.startSorting ? "Sorting..." : "Start Sorting"}`}</button>
                    {this.state.sorted ? <button onClick={this.setData} className="buttonSort um">Regenerate</button> : ""}

                    {this.state.array.map((item,index) => {
                        return(
                            <div className='item' data-size={item} data-index={index} style={{"top": `${100 - item - 1}%`,"left": `${index}%`,"background": `${this.state.active === index ? "red" : "#121212"}`}}></div>
                        )
                    })}
                </div>
                <div className="sortInfo">
                    <h3>Características</h3>
                    <ul>
                        <li><p><strong>Encontra o menor elemento repetidamente:</strong> o Selection Sort encontra repetidamente o menor elemento na lista e o coloca em sua posição correta.</p></li>
                        <li><p><strong>Ineficiente em grandes listas: </strong>assim como o Bubble Sort, o Selection Sort é um algoritmo de ordenação ineficiente em grandes listas, pois também tem complexidade de tempo quadrática O(n^2).</p></li>
                        <li><p><strong>Não otimizado: </strong>o Selection Sort não é otimizado, o que significa que ele executa o mesmo número de comparações independentemente da ordem inicial da lista.</p></li>
                        <li><p><strong>Não é estável: </strong>o Selection Sort não é um algoritmo de ordenação estável, o que significa que elementos iguais podem ser reorganizados durante a ordenação.</p></li>
                        <li><p><strong>Fácil de implementar: </strong>o Selection Sort é um algoritmo de ordenação fácil de entender e implementar, o que o torna uma boa escolha para pequenas listas ou para fins educacionais.</p></li>
                        <li><p><strong>Requer memória adicional mínima: </strong>o Selection Sort requer apenas uma quantidade mínima de memória adicional, o que o torna uma boa escolha para ordenar listas de tamanho fixo ou com restrições de memória.</p></li>
                    </ul>
                </div>
                <div className="code">
                    <h3>Código (em JAVASCRIPT)</h3>
                    <div className='sourceCode'>
<pre>{`function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let menor = i;

        for (let j = menor + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
        }

        swap(array, i,menor);
    }
}`}</pre>
                    </div>
                </div>
            </div>
        )
    }
}