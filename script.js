function search(){

let query = document.getElementById("searchBox").value.toLowerCase();

let resultDiv = document.getElementById("results");

resultDiv.innerHTML="";

documents.forEach(doc => {

if(doc.content.includes(query) || doc.title.toLowerCase().includes(query)){

let p = document.createElement("p");

p.innerHTML = "<b>" + doc.title + "</b><br>" + doc.content;

resultDiv.appendChild(p);

}

});

}