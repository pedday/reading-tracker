const button = document.getElementById('save');
button.addEventListener('click', function() {
  alert('progress saved!');
});

 function newdivfuntion(){
    document.getElementById('newbooks').innerHTML+=" <div class='bookdiv'> <input type='text' placeholder='enter the book name' id='bookname'><input type='text' placeholder='pages progress 23/350' id='pages'><br><br><button id='save' onclick='savefunction()'>save</button><button id='done'>done</button><button id='delete' onclick = 'deletefunction()'> delete</button></div>";
}

function deletefunction(){
  document.querySelector('#delete').addEventListener('click', (e) => {
    e.target.parentElement.remove()
  })
}