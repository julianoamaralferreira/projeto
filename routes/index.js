var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  global.db.listarEmpresas((error, docs) => {
    if(error){return console.log(error);}
    res.render('index', { title: 'Lista de Empresas', documento : docs });
  })  
});

router.get('/new', function(req, res){
	res.render('new', { title: 'Cadastrar Empresas'});

})

router.post('/new', function(req, res){
	var nome 	= req.body.nome;
	var numero	= parseInt(req.body.numero);

	global.db.adicionarEmpresas({nome, numero}, (error, result) => {
		if(error) {return console.log(error);}
		res.redirect('/');
	})

})

/*testar*/
router.get('/', function(req, res) {
  global.db.listarFuncionario((error, docs) => {
    if(error){return console.log(error);}
    res.render('index', { title: 'Lista de Funcionarios', documento : docs });
  })  
});

router.get('/newFuncionario', function(req, res){
	res.render('newFuncionario', { title: 'Cadastrar Funcionario'});

})

router.post('/newFuncionario', function(req, res){
	var nome 	= req.body.nome;
	var matricula = parseInt(req.body.matricula);
	var rg = req.body.rg;
	var cpf = parseInt(req.body.cpf);
	var rua = req.body.rua;
	var nresidencia = parseInt(req.body.nresidencia);
	var cidade = req.body.cidade;
	var bairro = req.body.bairro;


	
	global.db.adicionarFuncionario({nome, matricula, rg, cpf, rua, nresidencia, cidade, bairro}, (error, result) => {
		if(error) {return console.log(error);}
		res.redirect('/newFuncionario');
	})

})
module.exports = router;
