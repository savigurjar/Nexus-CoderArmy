// {/* <li>TS</li> */}

// how to create an element in js
// let element = document.createElement('li');
// element.innerHTML = "TS";

// // parent ka access
// const parent = document.getElementById("root");
// parent.appendChild(element);

// for many element
// function attach(content) {
//   let element = document.createElement("li");
//   element.innerHTML = content;

//   // parent ka access
//   const parent = document.getElementById("root");
//   parent.appendChild(element);
// //   parent.append(element); // multiple attach kr skte h elemnt , lgakr
// }
// attach("TS");
// attach("React");
// attach("next script");

// **************************************
// text node
// const text = document.createTextNode("hello coder army");
// const parent = document.getElementById("root");
// parent.append(text);

// ***************************************
// attribute node

// const att = document.createAttribute("id");
// att.value = "coder";
// first li tag
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(att);

// second li tag
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(att);
// or other method
// const curr_list = document.querySelectorAll('li')[1];
// curr_list.setAttributeNode(att);


// ***************************
// accessing attribute 

// 1.accessing attribute of an element 
// const ele = document.getElementById("root");
// console.log(ele.getAttribute("id"));

// const elem = document.getElementById("root");
// // console.log(ele.getAttribute("class"));
// // create
// elem.setAttribute("ctae","30");
// // update
// elem.setAttribute("class","robin");
// // remove
// elem.removeAttribute("ctae");



// *********Add nodes to the DOM**********
// parent ka access then element create and parent ke ander element dal do
// const parent = document.getElementById("root");
// parent.innerHTML += "<li>ts</li>";
// const element = document.createElement('li');
// element.innerHTML = "ts";
// parent.prepend(element);

// inserbefore
// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// replace child

// parent.replaceChild(child2,element);






// *******************************insertAdjacentElement()************
// insertAdjacentHTMl()  homework

// const ele = document.createElement("div");
// ele.innerHTML = "hello coder army";

// // parent.insertAdjacentElement("beforebegin",ele);
// parent.insertAdjacentElement("afterEnd",ele);

// // remove a node or element
// document.querySelector('div').remove();

