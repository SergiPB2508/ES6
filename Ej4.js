// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let names1 = users1.map((e) => e.name);

console.log(names1);


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let names2 = users2.map((e) => {

    let name = e.name;

    // if(name.includes("A")){
    //     name = "Anacleto";
    // }
	
	if(name[0] == "A"){
        name = "Anacleto";
    }

    return name;
})

console.log(names2);


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let citiesVisited = cities.map((e) => {
    let city = e.name;
    if(e.isVisited){
        city += " (Visitado)";
    }

    return city
})

console.log(citiesVisited);
