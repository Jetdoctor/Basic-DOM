//document.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML = "Ersel";

document.querySelector("body > ul > li:nth-child(3)").innerHTML = "Ersel";

document.getElementsByTagName("li")[1].style.color = "blue";

document.getElementsByClassName("btn")[0].innerHTML = "Don't Click Me";

document.getElementById("title").innerHTML = "Hello v2";

document.querySelector("li.item a").innerHTML = "Definitely Not Google";

document.querySelector("li a").style.color = "red";

document.querySelector("button.btn").style.backgroundColor = "yellow";

//document.querySelectorAll("#list .item")[2];

document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.toggle("huge");

document.querySelector("h1").innerHTML = "<em> Hello v2 </em>"

//document.querySelector("h1").textContent = "Hello v3";

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.bing.com");