let  fuelRate, gasoline, etanol, exit;

gasoline = parseFloat(prompt("Insira o preço da gasolineolina"));
etanol = parseFloat(prompt("Insira o valor do Álcool"));
fuelRate = gasoline/etanol;

if(fuelRate == 1) fuelRate = 0.7;

do {
    if(fuelRate>0.7){
    prompt("A gasolina é mais vantajosa");
    }
    else if(fuelRate<0.7){
    prompt("O Álcool é mais vantajoso");
    }
    else{
    prompt("Ambos são equivalentes")
    }
}
while(exit != false);
