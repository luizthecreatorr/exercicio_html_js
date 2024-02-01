function validarFormulario(){
    let valorCampoA = document.getElementsByClassName('input-1').value;
    let valorCampoB = document.getElementsByName('input-2').value;

    valorCampoA = parseFloat(valorCampoA);
    valorCampoB = parseFloat(valorCampoB);

    if (valorCampoA >= valorCampoB) {
        document.getElementById('btn-submit').innerHTML = "Formulário válido";
    } else{
        document.getElementById('btn-submit').innerHTML = "Formulário inválido";
    }
}