const form = document.getElementById('formulario');
let linhas = '  ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();

});

function adicionarLinha(){
    const nomeInput = document.getElementById('nomeInput');
    const numeroInput = document.getElementById('numeroInput');

    const campoNome = (nomeInput.value);
    const campoNumero = (numeroInput.value);
    
    let linha = '<tr>';
    linha += `<td>${campoNome}</td>`;
    linha += `<td>${campoNumero}</td>`
    linha += `</tr>`
    linhas += linha;

    const seletorTbody = document.querySelector('tbody')
    seletorTbody.innerHTML = linhas;
}

