var totalFrutas = 0;

var kilosMora;
var valorMora;
var valorDescMora;
var totalMora = 0;

var kilosPera;
var valorPera;
var valorDescPera;
var totalPera = 0;

var kilosMaca;
var valorMaca;
var valorDescMaca;
var totalMaca = 0;
function calc(){
    // -------------------MORANGO-----------------//
    kilosMora = document.getElementById('idKiloMoran').value
    document.getElementById('idDescMoran').value = 0;
    document.getElementById('idTotalMora').value = totalMora;
    if (kilosMora<=5){
        valorMora = kilosMora * 2.5
        totalMora = valorMora;
        document.getElementById('idTotalMora').value = totalMora.toFixed([2]);
    }else{
        valorMora = kilosMora * 2.2
        if(valorMora>25){       
            valorMora = valorMora - (valorMora * 5) / 100
            valorDescMora = (kilosMora * 2.5) - valorMora
        }else{
            valorDescMora = (kilosMora * 2.5) - valorMora
        }
            totalMora = valorMora;
            document.getElementById('idTotalMora').value = totalMora.toFixed([2])
            document.getElementById('idDescMoran').value = valorDescMora.toFixed([2])
    }

    //---------------------PERA-------------------//
    kilosPera = document.getElementById('idKiloPera').value;
    document.getElementById('idDescPera').value = 0;
    document.getElementById('idTotalPera').value = totalPera;
    if(kilosPera<=5){
        valorPera = kilosPera * 2.2
        totalPera = valorPera;
        document.getElementById('idTotalPera').value = totalPera.toFixed([2])
    }else{
        valorPera = kilosPera *2.1
        if(valorPera>25){
            valorPera = valorPera - (valorPera * 5) / 100
            valorDescPera = (kilosPera * 2.2) - valorPera
        }else{
            valorDescPera = (kilosPera * 2.2) - valorPera
        }
        totalPera = valorPera
        document.getElementById('idTotalPera').value = totalPera.toFixed([2])
        document.getElementById('idDescPera').value = valorDescPera.toFixed([2])
    }

    //--------------------MACA-----------------------//
    kilosMaca = document.getElementById('idKiloMaca').value;
    document.getElementById('idDescMaca').value = 0;
    document.getElementById('idTotalMaca').value = totalMaca;
    if(kilosMaca<=5){
        valorMaca = kilosMaca * 2.8
        totalMaca = valorMaca
        document.getElementById('idTotalMaca').value = totalMaca.toFixed([2])
    }else{
        valorMaca = kilosMaca * 2.5
        if(valorMaca>25){
            valorMaca = valorMaca - (valorMaca * 5) / 100
            valorDescMaca = (kilosMaca * 2.8) - valorMaca
        }else{
            valorDescMaca = (kilosMaca * 2.8) - valorMaca
        }
        totalMaca = valorMaca
        document.getElementById('idTotalMaca').value = totalMaca.toFixed([2])
        document.getElementById('idDescMaca').value = valorDescMaca.toFixed([2])
    }

    //----------------Total das frutas---------------//
    totalFrutas = totalMora + totalPera+totalMaca;
    document.getElementById('idTotal').value = totalFrutas.toFixed([2])

}
function limp(){
    document.getElementById('idKiloMoran').value = "";
    document.getElementById('idDescMoran').value = "";
    document.getElementById('idTotalMora').value = "";
    document.getElementById('idKiloPera').value = "";
    document.getElementById('idDescPera').value = "";
    document.getElementById('idTotalPera').value = "";
    document.getElementById('idKiloMaca').value = "";
    document.getElementById('idDescMaca').value = "";
    document.getElementById('idTotalMaca').value = "";
    document.getElementById('idTotal').value = "";
}
