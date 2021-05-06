let  fuelRate, gasoline, etanol, exit;

do {
    gasoline = parseFloat(prompt("Insira o preço da Gasolina"));
    etanol = parseFloat(prompt("Insira o valor do Álcool"));
    fuelRate = etanol/gasoline;

    if(fuelRate == 1) fuelRate = 0.7;


    if(fuelRate>0.7){
    alert("A gasolina é mais vantajosa");
    }
    else if(fuelRate<0.7){
    alert("O Álcool é mais vantajoso");
    }
    else{
    alert("Ambos são equivalentes")
    }

    exit = confirm("Deseja realizar uma nova consulta? ")
}
while(exit != false);
