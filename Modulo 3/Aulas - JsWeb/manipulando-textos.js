const element = document.querySelector("h1");

element.innerHTML = "Hello World, vou ser bom nisso";

//innerHTML -> permite que a gente adicione elemento/codigo html pelo JS
//textContent -> Colocar um texto literal
//innerText -> colocar como texto

/*

innerHTML, innerText e textContent são todas propriedades de um elemento DOM em JavaScript
que são usadas para manipular o conteúdo de um elemento HTML.

(innerHTML) é usada para obter ou definir o conteúdo HTML de um elemento, 
incluindo quaisquer tags HTML dentro dele. Ela retorna uma string que representa o conteúdo HTML do elemento.
Pode ser usada para adicionar novo conteúdo HTML a um elemento ou alterar um conteúdo existente.

(innerText) é usada para obter ou definir o conteúdo de texto visível de um elemento.
 Ela retorna uma string que representa o conteúdo de texto visível do elemento, sem quaisquer tags HTML. 
 Pode ser usada para alterar o conteúdo de texto de um elemento, mas não afeta quaisquer elementos filhos ou seu conteúdo.

(textContent) é semelhante a innerText, mas retorna o conteúdo completo de texto de um elemento, incluindo quaisquer elementos filhos e seu conteúdo. 
Ela retorna uma string que representa o conteúdo completo de texto do elemento, sem quaisquer tags HTML.
Pode ser usada para alterar o conteúdo de texto de um elemento e de todos os seus elementos filhos.

Em geral, textContent é mais rápido do que innerText e innerHTML, pois não envolve análise ou renderização de HTML. 
No entanto, innerHTML fornece mais flexibilidade na manipulação do conteúdo HTML de um elemento.


*/
