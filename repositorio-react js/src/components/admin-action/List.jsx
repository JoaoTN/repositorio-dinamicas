import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {dinamicas:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/dinamicas/list')
        .then(
            (res)=>{
                this.setState({dinamicas:res.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.dinamicas) return
        return this.state.dinamicas.map(
            (din,i)=>{
                return <TableRow dinamica={din} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )

    }

    apagarElementoPorId(id){
        let temporariaDinamicas = this.state.dinamicas
        for(let i = 0; i<temporariaDinamicas.length;i++){
            if(temporariaDinamicas[i]._id===id){
                temporariaDinamicas.splice(i,1)
            }
        }
        this.setState({dinamicas:temporariaDinamicas})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Dinâmicas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}