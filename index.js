const myLibrary = [];
/*function Book() {
    //the constructor
} 
function addBookToLibrary(title, author) {
    return myLibrary.push(title, author)
}
addBookToLibrary("Limitless", "kwik")


function loopArray() {
    myLibrary.forEach(element => {
        console.log(element)
    });
}
loopArray(myLibrary)
*/
const dialog = document.querySelector('dialog')
const btn = document.getElementById('btn')
const btn1 = document.querySelector('dialog button') 
const input = document.getElementById('inputVal');
const title = document.getElementById('titleVal');
const author = document.getElementById('author');
const pages = document.getElementById('pages');


btn.addEventListener("click", () => {
    dialog.showModal()
})

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = document.createTextNode(myLibrary)
    const tit = document.createTextNode(title.value)
    const auth = document.createTextNode(author.value)
    const pag = document.createTextNode(pages.value)
    myLibrary.push(tit.value, auth.value, pag.value)
    console.log(titleVal.value)
    console.log("Array has " + myLibrary)
    clearText()
    
    const innerDiv = document.createElement('div');

    const div = document.getElementById('display')
    innerDiv.appendChild(tit)
    innerDiv.appendChild(auth)
    innerDiv.appendChild(pag)

    var deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute('data-index', '0')
    innerDiv.appendChild(deleteBtn)
    
  
    deleteBtn.addEventListener('click', (e) => {
        const element = e.target //target element
        element.remove()
        tit.remove()
        auth.remove()
        pag.remove()
        select.remove()
    })
    var select = document.createElement('select')
    select.innerHTML = 'Have you read?'
    select.id = 'select'
    innerDiv.appendChild(select)

    div.appendChild(innerDiv) 

    select.addEventListener('click', (e) => { 
        //select.innerHTML = ''; 
        const existingYes = document.getElementById('Read')
        const existingNo = document.getElementById('Not Read')

        if (!existingYes || !existingNo) {
        var optionDefault = document.createElement('option')
        var textDefault = document.createTextNode('Have you read?')
        optionDefault.appendChild(textDefault)
        
        select.appendChild(optionDefault)
        var optionYes = document.createElement('option')
        var textYes = document.createTextNode('Read')
        optionYes.value = 'Read'
        optionYes.id= 'Read'
        optionYes.appendChild(textYes)
        select.appendChild(optionYes)

        var optionNo = document.createElement('option')
        var textNo = document.createTextNode('Not Read') 
        optionNo.id='Not Read'
        optionNo.appendChild(textNo)
        select.append(optionNo)
        console.log(select.options) 
        }   
})
})


function clearText() {
const title = document.getElementById('titleVal').value = '';
const author = document.getElementById('author').value = '';
const pages = document.getElementById('pages').value = '';
}