//agregar eventos
const form =document.getElementById('formAgregar');
const lista= document.getElementById('items');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const valorItem = document.getElementById('item').value;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(valorItem));
    const botonDel=document.createElement('button');
    botonDel.className='btn btn-danger btn-small float-right';
    botonDel.appendChild(document.createTextNode('Incompleta X'));
    li.appendChild(botonDel);
    lista.appendChild(li);
    const campo = document.getElementById('item').value='';
});