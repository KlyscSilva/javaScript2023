/*

ARRAY - METODOS


push => adicionar um valor pro array
lenght => nos retorna o tamanho do array
sort => define nosso array em ordem alfabetica
delete => deleta um valor de uma posição no array

sempre utilizar () apos a varivel

splice => tirar elemento / acrescenta um elemento numa posição que eu escolho / modificar o array original
slice => fatiar // criar um novo array, por isso devemos armanezar numa variavel
pop => remove o ultimo elemento do array
shift => remove o primeiro elemento do array

*/


const students = ['Jaca', 'Manga', 'Evegol', 'Puyol', 'Leon', 'Ashley']

//students.push ('Alfredo') // adicionar um valor pro array
//students.push ('2k') // adicionar um valor pro array
//students.sort() // array em ordem alfabetica

//console.log(students.sort());
//console.log(students.length);


//students.pop()
//students.shift()
//students.splice(escolho a posição apartir do indice, indico quantos elementos quero retirar)



//students.splice(0,0,'Matheus')escolho a posição apartir do indice, indico quantos elementos quero retirar e informo o valor que quero acrescentar na determinada posição)


const newStudents = students.slice(1,3)

console.log(newStudents);
