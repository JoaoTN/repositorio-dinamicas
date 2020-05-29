var mongoose = require('mongoose');

var DinamicaSchema = mongoose.Schema(
    {
        titulo: { type: String, required: true, max: 120 },
        assunto: { type: String, required: true, max: 100 },
        duracao: { type: String, required: true, max: 20 },
        descricao:{ type:String, required:true, max:10000}, //Repensar tamanho.
        creditos:{type:String, required:true, max:100}
    }
);

var DinamicaModel = mongoose.model('dinamicas', DinamicaSchema);

module.exports = DinamicaModel;