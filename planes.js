let seguros = {
	basico:["Básico","$500"],
	intermedio:["Intermedio","$1.000"],
	premium:["Premium","$1.500"]
};
let opciones = document.querySelectorAll('input[type="radio"]');
const itemName = document.getElementsByName("select");
const itemBasico = document.querySelector("#basico");
const itemIntermedio = document.querySelector("#intermedio");
const itemPremium = document.querySelector("#premium");
const plan = document.querySelector(".plan");
const price = document.querySelector(".price");
let option = "";

// Recorrer los elementos de radio

for (let i = 0; i < itemName.length; i++) {
  let radio = itemName[i];
  // Verificar si el radio está seleccionado
  if (radio.checked) {
    // Acceder al valor del radio seleccionado
    option = radio.value;
  }
}
console.log(option);
/*itemBasico.addEventListener("change",(e) => {
	let selectedValue = e.target.value;
	return option = selectedValue;
});

itemIntermedio.addEventListener("change",(e) => {
	let selectedValue = e.target.value;
	return option = selectedValue;
});

itemPremium.addEventListener("change",(e) => {
	let selectedValue = e.target.value;
	return option = selectedValue;
});
*/
function selectItem() {
	if (option == "basico"){
		plan.innerHTML = " Básico";
		price.innerHTML = " $500";
	} else if (option == "intermedio") {
		plan.innerHTML = " " + seguros.intermedio[0];
		price.innerHTML = " " + seguros.intermedio[1];
	} else {
		plan.innerHTML = " " + seguros.premium[0];
		price.innerHTML = " " + seguros.premium[1];
	
	};
};

selectItem();


