import React,{Component} from  'react'
import axios from 'axios'
export default class Edit extends Component{

    constructor(props){
        super(props)

        this.state = {titulo:'', assunto:'', duracao:'', descricao:'', creditos:''}

        this.setTitulo = this.setTitulo.bind(this)
        this.setAssunto = this.setAssunto.bind(this)
        this.setDuracao = this.setDuracao.bind(this)
        this.setDescricao = this.setDescricao.bind(this)
        this.setCreditos = this.setCreditos.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:3002/dinamicas/retrieve/' + this.props.match.params.id)
        .then((res)=>{
            this.setState({
                titulo:res.data.titulo,
                assunto:res.data.assunto,
                duracao:res.data.duracao,
                descricao:res.data.descricao,
                creditos:res.data.creditos
            })

        })
        .catch(error=>console.log(error))
    }

    setTitulo(e){
        this.setState({titulo:e.target.value})
    }
    setAssunto(e){
        this.setState({assunto:e.target.value})
    }
    setDuracao(e){
        this.setState({duracao: e.target.value})
    }
    setDescricao(e){
        this.setState({descricao: e.target.value})
    }
    setCreditos(e){
        this.setState({creditos: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
         
        const DinamicaEditada = {titulo:this.state.titulo,
                                assunto:this.state.assunto,
                                duracao:this.state.duracao,
                                descricao:this.state.descricao,
                                creditos:this.state.creditos}
        axios.put('http://localhost:3002/dinamicas/update/'+this.props.match.params.id, DinamicaEditada)
        .then(
            (res)=>{
                this.props.history.push('/list/')
            }
        )
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Editar Dinâmica</h3>
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
                        <input type="text" className="form-control" value={this.state.duracao} onChange={this.setDuracao} />
                    </div>
                    <div className="form-group">
                        <label>Descrição: </label>
                        <textarea className="form-control" row="3" value={this.state.descricao} onChange={this.setDescricao}/>
                    </div>
                    <div className="form-group">
                        <label>Créditos: </label>
                        <input type="text" className="form-control" value={this.state.creditos} onChange={this.setCreditos}/>
                    </div>
                        <div className="form-group">
                        <input type="submit" value="Editar Dinâmica" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}