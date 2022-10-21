/* 5 variaveis
preço etanol
preço gasolina
tipo combustivel
gasto medio combustivel/km
distancia km da viagem

imprima o valor gasto na viagem*/

const precoEtanol = 5;
const precoGasolina = 6;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = (distanciaEmKm / kmPorLitro);

if (tipoCombustivel === 'Etanol') { //se o tipo for a string Etanol
    const valorGasto = litrosConsumidos * precoEtanol;

    console.log(valorGasto.toFixed(2));

} else {
  const valorGasto = litrosConsumidos * precoGasolina;

  console.log(valorGasto.toFixed(2));
}
