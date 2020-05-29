const DinamicaModel = require('../models/DinamicaModel')

class DinamicaService {
    static register(req, res) {
        DinamicaModel.create(req.body)
            .then(
                (Dinamica) => {
                    res.status(201).json(Dinamica)
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error)
                }
            )
    }

    static list(req, res) {
        DinamicaModel.find()
            .then(
                (dinamicas) => {
                    res.status(201).json(dinamicas)
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error)
                }
            )
    }
    static update(req, res) {
        DinamicaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        .then(
            (dinamica) => {
                res.status(201).json(dinamica);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
    //retorna o user deletado
    static delete(req, res){
        DinamicaModel.findByIdAndRemove(req.params.id)
        .then(
            (dinamica) => {
                res.status(201).json(dinamica);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
    //retorna um user
    static retrieve(req, res){
        DinamicaModel.findById(req.params.id)
        .then(
            (dinamica) => {
                res.status(201).json(dinamica);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
}

module.exports = DinamicaService