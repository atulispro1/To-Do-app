let inp = document.querySelector('input')
let btn = document.getElementById('add')
let ul = document.querySelector('ul')

btn.addEventListener('click', function(e) {
    e.preventDefault()

    if (inp.value === '') return 

    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = ''
    
    let delbtn = document.createElement('button')
    delbtn.innerText = 'delete'
    delbtn.classList.add('delete-btn')
    item.appendChild(delbtn)

    delbtn.addEventListener('click', function () {
        ul.removeChild(item)
    })
})
