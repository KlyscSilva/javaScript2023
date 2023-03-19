/*


pega a lista de array com objeto, onde diz se a pessoa é vip ou não
transforma a lista com MAP indicando os seguintes casos:

se for vip = setor black
caso não seja vip = setor green

  // utilizando operador tenario para realizar verificação
    let vipAcess = true
    let entraceFest = listAcess.vip && vipAcess ? 'Black' : 'Green'
    

    // Nova lista de objeto sendo criada com uma nova propriedade
    const newList = {

        name: listAcess.name,
        vip: listAcess.vip,
        sector: listAcess = `${entraceFest}`, 
    }



    return newList
    
    

*/

const list = [

    {name: "Matheus", vip: true},
    {name: "Atreus", vip: false},
    {name: "Queise", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
];



const newList = list.map ((listAcess => {

    let acessed // possui criar uma variavel fora do if e chama ela dentro do caso if

    if (listAcess.vip == true || listAcess.sector == false) {
        acessed = "Black"
        }else{
        acessed = "Green"
        }

    const newList = {

        name: listAcess.name,
        vip: listAcess.vip,
        sector: acessed
    }
    
    return newList
}
)
    
)

console.log(newList);
