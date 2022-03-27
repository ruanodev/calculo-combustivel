


function resultadoabastecimento()
{
    var mediagasolina = parseInt(document.getElementById('media_gasolina').value, 10);
    var valorgasolina = parseFloat(document.getElementById('valor_litro_gasolina').value, 10).toFixed(2);
    var valorabastecidogasolina = parseFloat(document.getElementById('valor_abastece_gasolina').value, 10);
    document.getElementById('result_gas').innerHTML = ((valorabastecidogasolina / valorgasolina) * mediagasolina).toFixed(2);

    var mediaalcool = parseInt(document.getElementById('media_alcool').value, 10);
    var valoralcool = parseFloat(document.getElementById('valor_litro_alcool').value, 10).toFixed(2);
    var valorabastecidoalcool = parseFloat(document.getElementById('valor_abastece_alcool').value, 10);
    document.getElementById('result_alco').innerHTML = ((valorabastecidoalcool / valoralcool) * mediaalcool).toFixed(2);

        if (media_gasolina.value == ""){
        alert ("Informe um valor");
        media_gasolina.focus();
        return false;
        }

        if (valor_litro_gasolina.value == ""){
            alert ("Informe um valor");
            valor_litro_gasolina.focus();
            return false;
            }

        if (media_alcool.value == ""){
            alert ("Informe um valor");
            media_alcool.focus();
            return false;
            }

        if (valor_litro_alcool.value == ""){
            alert ("Informe um valor");
            valor_litro_alcool.focus();
            return false;
            }


}

