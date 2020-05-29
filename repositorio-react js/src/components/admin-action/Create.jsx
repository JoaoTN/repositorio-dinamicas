import React,{Component} from  'react'
import axios from 'axios'
export default class Create extends Component{

    constructor(props){
        super(props)

        this.state = {nome:'', curso:'', IRA:''}

        this.setTitulo = this.setTitulo.bind(this)
        this.setAssunto = this.setAssunto.bind(this)
        this.setDuracao = this.setDuracao.bind(this)
        //Colocar preparação sem ser obrigatório
        this.setDescricao = this.setDescricao.bind(this)
        this.setCreditos = this.setCreditos.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }


    setTitulo(e){
        this.setState({titulo:e.target.value})
    }
    setAssunto(e){
        this.setState({assunto:e.target.value})
    }
    setDuracao(e){
        this.setState({duracao:e.target.value})
    }

    setDescricao(e){
        this.setState({descricao:e.target.value})
    }
    setCreditos(e){
        this.setState({creditos:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
         
        const dinamicaNew = {titulo:this.state.titulo,
                                assunto:this.state.assunto,
                                duracao:this.state.duracao,
                                descricao:this.state.descricao,
                                creditos:this.state.creditos}
         
        axios.post('http://localhost:3002/dinamicas/register', dinamicaNew)
        .then(
            (res)=>{
                //tirar console depois
                console.log('Dinâmica '+res.data._id+ ' inserido com sucesso')
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

        this.setState({titulo:'', assunto:'', duracao:'', descricao:'', creditos:''})
     }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Nova Dinâmica</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Título: </label>
                        <input type="text" className="form-control" value={this.state.titulo} onChange={this.setTitulo}/>
                    </div>
                    <div className="form-group">
                        <label>Assunto: </label>
                        <input type="text" className="form-control" value={this.state.assunto} onChange={this.setAssunto}/>
                    </div>
                        <div className="form-group">
                        <label>Duração: </label>
                        <input type="text" className="form-control" value={this.state.duracao} onChange={this.setDuracao}/>
                    </div>
                    <div className="form-group">
                        <label>Descrição: </label>
                        <textarea className="form-control" rows="3" value={this.state.descricao} onChange={this.setDescricao}/>
                    </div>
                    <div className="form-group">
                        <label>Créditos</label>
                        <input type="text" className="form-control" value={this.state.creditos} onChange={this.setCreditos}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submeter Dinâmica" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}