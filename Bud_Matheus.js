/* Desafio:
Crie uma função que recebe um número qualquer e encontra o maior número formado por dígitos consecutivos naquele número.

Exemplo 1:
Entrada: 53590
Saída: 90

Exemplo 2:
Entrada: 674030098567819
Saída: 5678

Exemplo 3:
Entrada: 9012364509789
Saída: 90123
*/

// SOLUÇÃO
// Para o desafio, considerei que o maior número de entrada possível será o valor do Number.MAX_SAFE_INTEGER (9007199254740991), que é o maior número que o JavaScript consegue representar com o tipo primitivo Number com exatidão. Nos exemplos ao final do código, incluí opções para a exibição de correspondências acima do valor limite.

function maiorSequenciaCrescente(numero) {
    // Expressão Regular com o padrão de números a ser identificado
    let padrao = /(?:(?=01|12|23|34|45|56|67|78|89|90)\d)+\d/g;

    // Encontra o maior número sequencial possível de acordo com o padrão da expressão regular, e ordena o array em ordem decrescente para retornar o maior número.
    return numero.toString().match(padrao).sort((a, b) => b - a)[0];
}

// Saídas no console para verificação

// Confirmação exemplo 1
console.log(maiorSequenciaCrescente(53590));

// Confirmação exemplo 2
console.log(maiorSequenciaCrescente(674030098567819));

// Confirmação exemplo 3
console.log(maiorSequenciaCrescente(9012364509789));

// Confirmação com número aleatório
console.log(maiorSequenciaCrescente(987654321012345));

// Confirmação com o MAX_SAFE_INTEGER (9007199254740991)
console.log(maiorSequenciaCrescente(Number.MAX_SAFE_INTEGER));

// Ainda é possível extrapolar o limite do MAX_SAFE_INTEGER, ao incluir um n ao final do inteiro literal, para que a função exiba a sequência correspondida totalmente, sem limitar-se ao número máximo representável pelo tipo primitivo Number.
console.log(maiorSequenciaCrescente(53590987654321012345678n));
// Sem a extrapolação, o resultado é truncado, exibindo então o máximo sequencial possível dentro do limite do MAX_SAFE_INTEGER.
console.log(maiorSequenciaCrescente(53590987654321012345678));