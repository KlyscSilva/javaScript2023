/*

8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 85.72

A distância de 85.7m corresponde a:

0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm


*/

const medidas = (number) => {


    let result = number / 1000
    console.log(`${result}Km`);


}

medidas(185.7)