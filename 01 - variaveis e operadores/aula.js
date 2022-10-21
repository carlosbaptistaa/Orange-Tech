//DESAFIO
/*Calcular o valor de combustivel em uma viagem

  3 variaveis
  1 preço do combustivel
  2 gasto medio de combustivel do carro por KM
  3 distancia em KM da viagem.*/
  
  const precoCombustivel = 4.50;
  const kmPorLitros = 10;
  const distanciaEmKm = 100;

  const litrosConsumidos = distanciaEmKm / kmPorLitros;
  const valorGasto = litrosConsumidos * precoCombustivel;
  
  console.log(valorGasto.toFixed(2));
  //450


