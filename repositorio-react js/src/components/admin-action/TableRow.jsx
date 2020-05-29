import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {
    
    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(){
        axios.delete('http://localhost:3002/dinamicas/delete/'+this.props.dinamica._id)
        .then(
            (res)=>{
            this.props.apagarElementoPorId(this.props.dinamica._id)
        })
        .catch(error=>console.log(error))

    }
    
    render() {
        return (
            <tr>
                <td>
                    {this.props.dinamica._id}
                </td>
                <td>
                    <Link to={this.props.dinamica._id}>{this.props.dinamica.titulo}</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.dinamica._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}