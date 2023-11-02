console.log("card added");
let card = [
{
	name:"basico",
	img:"https://images.pexels.com/photos/18114547/pexels-photo-18114547/free-photo-of-calle-edificios-coche-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price:"$500"
},
{	
	name:"intermedio",
	img:"https://images.pexels.com/photos/18715594/pexels-photo-18715594/free-photo-of-carretera-coche-vehiculo-negro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price:"$1000"
},
{
	name:"premium",
	img:"https://images.pexels.com/photos/3221163/pexels-photo-3221163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price:"$1500"
}];

const basico = document.getElementById("basico-button");
const intermedio = document.getElementById("intermedio-button");
const premium = document.getElementById("premium-button");
const cardBasico = document.getElementById("card-1");
const cardIntermedio = document.getElementById("card-2");
const cardPremium = document.getElementById("card-3");

basico.addEventListener("click",()=>{
	cardBasico.innerText = card[0].price;
});

intermedio.addEventListener("click",()=>{
	cardIntermedio.innerText = card[1].price;
});

premium.addEventListener("click",()=>{
	cardPremium.innerText = card[2].price;
});


