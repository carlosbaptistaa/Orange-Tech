//como saber se um numero é PAR, se o resto = 0.

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;  

//se a condição for verdadeira, para. se nao for, vai continuar

if (numero === 0) {
    console.log('O número é inválido');

} else if (numeroDivisivelPor5) {       //se a condição for verdadeira, para. se nao for, vai continuar
    console.log('Sim');

} else {        //se nao for divisivel por 5, imprime Nao
    console.log('Não');
}

