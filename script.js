const maincourse= {
    "White Sauce Pasta":150,
    "Red Sauce Pasta":150,
    "Pink Sauce Pasta":150,
    "Chicken Lasagne":170,
    "Creamy Mushroom Pasta":120,
    "Chicken Burger":100,
    "Cottage Cheese Steak":99,
}
const cocktail= {
    "Beer":70,
    "Pina Colada":99,
    "Gin and Tonic":100,
    "Virgin Mojito":110,
    "Fruit Punch":50,
    "White Sangria":110,
    "Red Sangria":110,
}
const Dessert = {
    "Cheescake":140,
    "Ice-cream":70,
    "Rum Ball":80,
    "Chocolate Ganache":150,
    "Butterscotch Sundae":120,
}
let gen_maincourse,gen_cocktail,gen_dessert,totalBill;
const getRandomDishes =()=>{
gen_maincourse = Object.keys(maincourse)[Math.floor(Math.random() * Object.values(maincourse).length)];
gen_cocktail = Object.keys(cocktail)[(Math.floor(Math.random() * Object.values(cocktail).length))];
gen_dessert  = Object.keys(Dessert)[Math.floor(Math.random() *Object.values(Dessert).length)];
totalBill = maincourse[gen_maincourse] + cocktail[gen_cocktail] +Dessert[gen_dessert];
}