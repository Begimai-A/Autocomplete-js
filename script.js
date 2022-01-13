
let names=["Atyrgul", "Peter", "Steven", "Jacob", "Bill", "Van","George", "Eve", "Sam","Kyte",
	"Larisa", "John", "Helen", "Lewis","Clarins", "Lee", "Bernard", "Robert", "Frank", "Fiona",
	"Dima","Denis","Bryan","Julia","Oscar", "Olivia"];


//sort names in ascending order
let sortedNames=names.sort();
console.log(sortedNames);

let input=document.getElementById("input");

input.addEventListener("keyup", (e)=>{
	removeElements();
	for (let i of sortedNames){
		if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value!=""
		){

			let listItem=document.createElement("li");
			listItem.classList.add("list-items");
			listItem.style.cursor="pointer";
			listItem.setAttribute("onclick", "displayNames('"+ i + "')");
			// eslint-disable-next-line indent
            let word="<b>"+ i.substr(0, input.value.length)+"</b>";
			word+=i.substr(input.value.length);
			listItem.innerHTML=word;
			document.querySelector(".list").appendChild(listItem);
		}
	}

});
function displayNames(value){
	input.value=value;
	removeElements();
}
function removeElements(){
	let items=document.querySelectorAll(".list-items");
	items.forEach((item)=>{
		item.remove();
	});
}