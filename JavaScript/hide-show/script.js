function show() {
  let paragraph = document.getElementById('p');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    document.getElementById('a1').innerHTML = 'Ocultar Contéudo';
  } else {
    paragraph.style.display = 'none';
    document.getElementById('a1').innerHTML = 'Mostrar Contéudo';
  }
}
function showa() {
  let paragraph = document.getElementById('a');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    document.getElementById('a2').innerHTML = 'Ocultar Contéudo';
  } else {
    paragraph.style.display = 'none';
    document.getElementById('a2').innerHTML = 'Mostrar Contéudo';
  }
}
function showb() {
  let paragraph = document.getElementById('b');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    document.getElementById('a3').innerHTML = 'Ocultar Conteudo';
  } else {
    paragraph.style.display = 'none';
    document.getElementById('a3').innerHTML = 'Mostrar Contéudo';
  }
}
