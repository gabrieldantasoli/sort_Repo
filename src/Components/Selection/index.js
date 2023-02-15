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
            await new Promise(resolve => setTimeout(resolve, 150));
      
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
            <div className='sort green' id='bubble'>
                <h2 className='green'>Selection Sort</h2>
                <div className="sortContainer">
                    <button onClick={this.selectionSort} className="buttonSort">{this.state.sorted ? "Sorted" : `${this.state.startSorting ? "Sorting..." : "Start Sorting"}`}</button>
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