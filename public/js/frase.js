$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
	//exibe o elemento spinner na tela
	$("#spinner").toggle();
	//consulta um serviço via get, se houser erro exibe uma mensagem de erro, em ambos sucesso ou error, ocultara p spinner.
	$.get("http://localhost:3000/frases", alterarFrase).fail(function(){
		var erro = $("#erro");
		erro.show();
		setTimeout(function(){
			erro.toggle();
		}, 2000);
	}).always(function(){

		$("#spinner").toggle();
	});
}

function alterarFrase(data){
	let numero = Math.floor(Math.random() * data.length);
 	let frase = $(".frase");
 	frase.text(data[numero].texto);
 	atualizaTamanhoFrase();
 	atualizaTempo(data[numero].tempo);
}

function buscaFrase(){
	$("#spinner").toggle();
	let fraseId = $("#frase-id").val();
	let dados = {id: fraseId};
	$.get("http://localhost:3000/frases", dados, trocaFrase).fail(function(){
		var erro = $("#erro");
		erro.show();
	}).always(function(){
		$("#spinner").toggle();
	});
}

function trocaFrase(data){
	let frase = $(".frase");
	frase.text(data.texto);
	atualizaTamanhoFrase();
 	atualizaTempo(data.tempo);
}