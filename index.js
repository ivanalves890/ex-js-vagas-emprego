let opcao = 0;

let listaVagas = [
  {
    nome:"Auxiliar",
    descricao: "Auxiliar de serviços de produção",
    data: "20/02/2023",
    candidatos: []
  },
  {
    nome:"Gerente",
    descricao: "Gerente de produção",
    data: "20/02/2023",
    candidatos: []
  }
];

main();

function main(){
  do{
    exibeMenu();
    executarOpcao();
  } while(opcao !== 6)
}

function exibeMenu(){
  opcao = parseInt(prompt(
    "<< Sistema de Vagas de Emprego >>"+
    "\n\n"+
    "Escolha uma opção:\n"+
    "1. Listar vagas disponíveis\n"+
    "2. Criar uma nova vaga\n"+
    "3. Visualizar uma vaga\n"+
    "4. Inscrever um candidato em uma vaga\n"+
    "5. Excluir uma vaga\n"+
    "6. Sair\n"
    )); 
}

function executarOpcao(){
switch(opcao){
  case 1:
    listarVagas();
    break;
  case 2:
    criaVaga();
    break;
  case 3:
    visualizaVaga();
    break;
  case 4:
    incluiCandidato();
    break;
  case 5:
    excluiVaga();
    break;
  case 6:
    confirm("Deseja realmente sair?");
    break;
  default:
    alert("Opção inválida");
    break;
}
}

function listarVagas(){
  let strListaVagas = "Vagas disponíveis:"+"\n\n";
  for(let i=0; i< listaVagas.length ; i++){
    strListaVagas += 
      "Indice: "+i+"\n"+"Nome: "+listaVagas[i].nome+"\n"+"Candidatos: "+
      listaVagas[i].candidatos.length+
      "\n\n"
  }
  alert(strListaVagas);
}

function criaVaga(){
  nome = prompt("Qual o nome da vaga?");
  descricao = prompt("Qual a descrição da vaga?");
  data = prompt("Qual a data limite da vaga?");
  candidatos = [];
  let vaga = {
    nome,
    descricao,
    data,
    candidatos
}
  let confirmaCriaVaga = confirm("Confirma a inclusão da vaga?");
  if(confirmaCriaVaga){
    listaVagas.push(vaga);
    alert("Vaga criada com sucesso!");
  } else{
    alert("Cancelado");
  }
}

function excluiVaga(){
  const indice = parseInt(prompt("Digite o índice da vaga"));
  let confirmaExclusao = false;
  if(listaVagas[indice]){
    confirmaExclusao = confirm(
      "Confirma a exclusão da vaga?\n\n"+
      "Índice: "+indice+"\n"+
      "Nome: "+listaVagas[indice].nome+"\n"+
      "Descrição: "+listaVagas[indice].descricao+"\n"+
      "Data: "+listaVagas[indice].data+"\n"+
      "Candidatos: "+listaVagas[indice].candidatos.length+"\n"
      );
    if(confirmaExclusao){
      listaVagas.splice(indice,1);
      alert("Vaga excluída");
    } else {
      alert("Cancelado");
    }
  } else {
    alert("Vaga inexistente");
  }
}

function visualizaVaga(){
  let strNomeCandidatos = "";
  const indice = parseInt(prompt("Digite o índice da vaga"));
  for(let i=0; i < listaVagas[indice].candidatos.length ; i++){
    strNomeCandidatos += listaVagas[indice].candidatos[i] + "\n";
  }
  alert(
      "Visualizando vaga:\n\n"+
      "Índice: "+indice+"\n"+
      "Nome: "+listaVagas[indice].nome+"\n"+
      "Descrição: "+listaVagas[indice].descricao+"\n"+
      "Data: "+listaVagas[indice].data+"\n"+
      "Número de candidatos: "+listaVagas[indice].candidatos.length+"\n"+
      strNomeCandidatos+"\n"
  );
}

function incluiCandidato(){
  const nomeCandidato = prompt("Digite o nome do candidato:");
  const indice = parseInt(prompt("Digite o índice da vaga para inscrever o candidato:"));
  let confirmaInclusao = confirm(
    "Deseja incluir o candidato "+
    nomeCandidato+" na vaga?\n"+
    "Vaga"+"\n"+
    "Índice: "+indice+"\n"+
    "Nome: "+listaVagas[indice].nome+"\n"+
    "Descrição: "+listaVagas[indice].descricao+"\n"+
    "Data: "+listaVagas[indice].data+"\n"+
    "Número de candidatos: "+listaVagas[indice].candidatos.length+"\n"
  );
  if(confirmaInclusao){
    listaVagas[indice].candidatos.push(nomeCandidato);
    alert("Candidato incluído")
  } else{
    alert("Cancelado");
  }
}