---
title: implementando um algoritmo de criptografia usando o xor
author: dev marcell
pubDatetime: 2024-01-10T02:45:42Z
slug: implementando-um-algoritmo-de-criptografia-usando-o-xor
featured: true
draft: false
tags:
  - criptografia
  - estrutura de dados
description: inicialmente o algoritmo encripta um input e o decripta em seguida com...
---

olá pessoal! vamos entender esse código?

```javascript
function encriptDecript(input: string) {
  const separatedStr = input.split('');
  const xor_term = 'X'; //any character will work here
  for (let i = 0; i < separatedStr.length; i++) {
    separatedStr[i] = String.fromCharCode(separatedStr[i].charCodeAt(0) ^ xor_term.charCodeAt(0));
  }
  return separatedStr.join('');
}

const encriptedInput = encriptDecript('Marcell');
console.log(encriptedInput);
const decriptedOutput = encriptDecript(encriptedInput);
console.log(decriptedOutput);
```

inicialmente o algoritmo em si encripta um determinado input e o decripta, em seguida com **a mesma função**.

agora vamos desmembrar essa obra de arte aos poucos.

- recebemos um `input` do tipo `string` que seu tamanho representará a **complexidade de tempo** do nosso algoritmo.
- criamos o primeiro termo (separatedStr) da operação e aplicamos o método `split('')` na string. essa string nos retorna um array. esse array é composto por cada letra da string em que o método foi aplicado. esse conceito é chamado de **substring**
- criamos o segundo termo (xor_term) da operação, no qual pode ter qualquer valor, sendo um único caractere.
- em seguida, fazemos uma iteração com o array `separatedStr`
- `separatedStr[i]` a cada momento do loop tem um valor baseado no array iterado. basicamente vai do indice 0 ao último.

agora bebemos um copo de água e vamos para a linha de código mais desafiadora do algoritmo

```javascript
separatedStr[i] = String.fromCharCode(
  //                    |---- 3 ----|
  separatedStr[i].charCodeAt(0) ^ xor_term.charCodeAt(0)
  //              |----1----| |-2-|
);
```

1. `charCodeAt(0)` na string que é chamado, retorna o valor unicode do caractere selecionado. 0 é a posição do indice que ele recebe

`67` é o valor unicode da letra C.

```javascript
const str = "C";

str.charCodeAt(0); // 67
```

2. o operador `^` é o <a target="_blank" href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR'>bitwise xor</a> é responsável por fazer as operações seguindo a regra da porta lógica `exclusive or` retornando um bigint com o binário da string.

lembrete

- binário - base 2
- decimal - base 10
- hexadecimal - base 16
- ascii - base 256

```javascript
const some_number = 42; // 101010 (base 2)
const other_number = 52; // 110100 (base 2)

console.log(a ^ b); // output: 30 (base 10)
```

antes de fazermos a prova real deste algoritmo, vamos entender a tabela verdade do xor

| a   | b   | a ⊕ b (a xor b) |
| :-- | :-- | :-------------- |
| 0   | 0   | 0               |
| 0   | 1   | 1               |
| 1   | 0   | 1               |
| 1   | 1   | 0               |

agora faremos a tabela verdade dos binários de `some_number` e `other_number`

| some_number (42) | other_number (52) | some_number ⊕ other_number (30) |
| :--------------- | :---------------- | :------------------------------ |
| 1                | 1                 | 0                               |
| 0                | 1                 | 1                               |
| 1                | 0                 | 1                               |
| 0                | 1                 | 1                               |
| 1                | 0                 | 1                               |
| 0                | 0                 | 0                               |

convertendo `011110` para a base 10 temos o número `30`

3. `fromCharCode()` esse método retorna a string equivalente a um valor unicode

```javascript
String.fromCharCode(67); // C
// volte ao código do tópico 1 caso não tenha entendido o output
```
