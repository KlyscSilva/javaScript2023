/*


pega a lista de array com objeto, onde diz se a pessoa é vip ou não
transforma a lista com MAP indicando os seguintes casos:

se for vip = setor black
caso não seja vip = setor green


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





const newList = list.map ((listAcess,index) => {

    // utilizando operador tenario para realizar verificação
    let vipAcess = true
    let entraceFest = listAcess.vip && vipAcess ? 'Black' : 'Green'
    

    // Nova lista de objeto sendo criada com uma nova propriedade
    const newList = {

        name: listAcess.name,
        vip: listAcess.vip,
        sector: listAcess = `${entraceFest}`,
        index,


    }



    return newList
    
    
}
    
)

console.log(newList);
