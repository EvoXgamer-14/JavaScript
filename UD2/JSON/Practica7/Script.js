var textoCafe = '{"title": "Latte","description":"As the most popular coffee drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.","ingredients":["Espresso","Steamed milk"],"image":"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww","id": 2}'

cafe = JSON.parse(textoCafe);

console.log(cafe);
console.log("Titulo: "+cafe.title);
console.log("Descripcion: "+cafe.description);
console.log("Ingredientes: "+cafe.ingredients);
console.log("Imagen: "+cafe.image);
console.log("Id: "+cafe.id);

var fichaCafe = {
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients,
    imagen: cafe.image,
};