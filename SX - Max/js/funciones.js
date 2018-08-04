function guardarValor() {

  var vNombre = "nombre";
  var valor = document.getElementById("nombre").value;
  localStorage[vNombre] = valor;

  var vTelefono = "telefono";
  var valor = document.getElementById("telefono").value;``
  localStorage[vTelefono] = valor;

  var vCorreo = "correo";
  var valor = document.getElementById("correo").value;
  localStorage[vCorreo] = valor;

  var vComentario = "comentario";
  var valor = document.getElementById("comentario").value;
  localStorage[vComentario] = valor;

}

function fncEnviar() {

  if (document.getElementById("nombre").value == "") {
    document.getElementById("nombre").style.borderColor = "red";
    document.getElementById("nombre").style.borderWidth = "3px";
    alert("El nombre no debe estar vacío.");
    return false;
  }

  if (document.getElementById("nombre").value.search(/^[a-z ,.'-]+$/i)) {
    document.getElementById("nombre").style.borderColor = "red";
    document.getElementById("nombre").style.borderWidth = "3px";
    alert("El nombre no es valido.");
    return false;
  } else {
    document.getElementById("nombre").style.borderColor = "green";
    document.getElementById("nombre").style.borderWidth = "3px";
  }

  if (document.getElementById("telefono").value == "") {
    document.getElementById("telefono").style.borderColor = "red";
    document.getElementById("telefono").style.borderWidth = "3px";
    alert("El telefono es requisito.");
    return false;
  } else {
    document.getElementById("telefono").style.borderColor = "green";
    document.getElementById("telefono").style.borderWidth = "3px";
  }

  if (document.getElementById("telefono").value.length < 8) {
    document.getElementById("telefono").style.borderColor = "red";
    document.getElementById("telefono").style.borderWidth = "3px";
    alert("El telefono es muy corto.");
    return false;
  } else {
    document.getElementById("telefono").style.borderColor = "green";
    document.getElementById("telefono").style.borderWidth = "3px";
  }

  if (document.getElementById("telefono").value.length > 8) {
    document.getElementById("telefono").style.borderColor = "red";
    document.getElementById("telefono").style.borderWidth = "3px";
    alert("El telefono es muy largo.");
    return false;
  } else {
    document.getElementById("telefono").style.borderColor = "green";
    document.getElementById("telefono").style.borderWidth = "3px";
  }

  if (document.getElementById("correo").value == "") {
    document.getElementById("correo").style.borderColor = "red";
    document.getElementById("correo").style.borderWidth = "3px";
    alert("El correo es requisito.");
    return false;
  } else {
    document.getElementById("correo").style.borderColor = "green";
    document.getElementById("correo").style.borderWidth = "3px";
  }

  if (document.getElementById("comentario").value == "") {
    document.getElementById("comentario").style.borderColor = "red";
    document.getElementById("comentario").style.borderWidth = "3px";
    alert("Debe decir un comentario.");
    return false;
  } else {
    document.getElementById("comentario").style.borderColor = "green";
    document.getElementById("comentario").style.borderWidth = "3px";
  }
  guardarValor();
  window.location = "index.html";
}

window.onload = function(){

  // Adquirir el modal
  var modal = document.getElementById("myModal01");

  // Agarra la imagen e inserta en el modal - usa "alt" texto como subtitulo
  var img = document.getElementById("myimg01");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // cierra el modal
  var span = document.getElementsByClassName("close")[0];

  // cuando presione "x", cierra el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal02");
  var img = document.getElementById("myimg02");
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal03");
  var img = document.getElementById("myimg03");
  var modalImg = document.getElementById("img03");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal04");
  var img = document.getElementById("myimg04");
  var modalImg = document.getElementById("img04");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal05");
  var img = document.getElementById("myimg05");
  var modalImg = document.getElementById("img05");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal06");
  var img = document.getElementById("myimg06");
  var modalImg = document.getElementById("img06");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal07");
  var img = document.getElementById("myimg07");
  var modalImg = document.getElementById("img07");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal = document.getElementById("myModal08");
  var img = document.getElementById("myimg08");
  var modalImg = document.getElementById("img08");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
}

