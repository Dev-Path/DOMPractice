// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'New Page'
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// header.style.borderBottom = 'solid 3px #000'

// getElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'cyan';

// for (var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }


// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// var itemList = document.querySelector('#items');
// console.log(itemList.childNodes);
/*childNodes selects white spaces as well. It therefore rather advisable if you want to select only actual elements */
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'cyan'

// firstChild
// console.log(itemList.firstChild)
/*firstChild selection is also going to select any whitespace just like childNodes selection*/

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello World"

// lastChild
// console.log(itemList.lastChild);
// itemList.lastChild.textContent = "Hello World";

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// var item = document.querySelectorAll('.title')
// console.log(item[1]);
// console.log(item[1].nextElementSibling);

// previousSibling
// var itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);

// previousElementSibling
// var itemList = document.querySelector('#items');
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
// var newDiv = document.createElement('div');
// console.log(newDiv);
// add class
// newDiv.className = 'hello';

// add id
// newDiv.id = 'hello1'

// Add attribute
// newDiv.setAttribute('title', 'Hello Div')

// create text node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

