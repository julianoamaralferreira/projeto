var conexao = require("mongodb").MongoClient;

conexao.connect("mongodb://localhost/empresa")
.then(conn => global.conn = conn.db("empresa"))
.catch(error => console.log(error))

function listarEmpresas(callback){
    global.conn.collection("dadosempresa").find({}).toArray(callback);
}

function adicionarEmpresas(documento, callback){
	global.conn.collection("dadosempresa").insert(documento, callback);
}

function listarFuncionario(callback){
    global.conn.collection("funcionario").find({}).toArray(callback);
}

function adicionarFuncionario(documento, callback){
	global.conn.collection("funcionario").insert(documento, callback);
}

module.exports = { listarEmpresas, adicionarEmpresas, listarFuncionario, adicionarFuncionario }