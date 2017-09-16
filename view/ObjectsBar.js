var ObjectsBar = function(){

  this.createDiv = function() {
    if(CLICKED == "pontoBotao"){
      var div = document.getElementById('popupPonto');
      alert("oooooooo");
      div.style.position = 'absolute';
      div.style.top = '50px';
      div.style.left = '50px';
      div.style.display = 'block';
    }if(CLICKED == "linhaBotao"){
      var div = document.getElementById('popupBarra');
      div.style.position = 'absolute';
      div.style.top = '150px';
      div.style.left = '50px';
      div.style.display = 'block';
    }if(CLICKED == "anelBotao" || CLICKED == "discoBotao"){
      var div = document.getElementById('popup');
      div.style.position = 'absolute';
      div.style.top = '100px';
      div.style.left = '50px';
      div.style.display = 'block';
    }
    document.getElementById('divTrans').style.display = 'block';
  }

}

// var BarraLateral = function(cena3D, div) {

//   var CLICKED;

//   // document.getElementById(div).style.border = "solid red 2px";
//   document.getElementById(div).style.backgroundColor = "#0000FF";

//   // Eventos de click nos botões

//   document.getElementById("pontoBotao").addEventListener("click", function() {
//     CLICKED = "pontoBotao";
//     tela1.barraLateral.createDiv();
//   }, false);

//   document.getElementById("anelBotao").addEventListener("click", function() {
//     CLICKED = "anelBotao";
//     tela1.barraLateral.createDiv();
//   }, false);

//   document.getElementById("discoBotao").addEventListener("click", function() {
//     CLICKED = "discoBotao";
//     tela1.barraLateral.createDiv();
//   }, false);

//   document.getElementById("linhaBotao").addEventListener("click", function() {
//     CLICKED = "linhaBotao";
//     tela1.barraLateral.createDiv();
//    }, false);


//   // função para criar e ajustar a div do form
//   this.createDiv = function() {
//     if(CLICKED == "pontoBotao"){
//       var div = document.getElementById('popupPonto');
//       // alert("oooooooo"+document.getElementById('pontoBotao').offset().left);
//       div.style.position = 'absolute';
//       div.style.top = '50px';
//       div.style.left = '50px';
//       div.style.display = 'block';
//     }if(CLICKED == "linhaBotao"){
//       var div = document.getElementById('popupBarra');
//       div.style.position = 'absolute';
//       div.style.top = '150px';
//       div.style.left = '50px';
//       div.style.display = 'block';
//     }if(CLICKED == "anelBotao" || CLICKED == "discoBotao"){
//       var div = document.getElementById('popup');
//       div.style.position = 'absolute';
//       div.style.top = '100px';
//       div.style.left = '50px';
//       div.style.display = 'block';
//     }
//     document.getElementById('divTrans').style.display = 'block';
//   }

//   // função para inserir objeto
//   this.insereObj = function(){
//     if(CLICKED == "pontoBotao"){
//       this.px = document.getElementById('pxPonto').value;
//       this.py = document.getElementById('pyPonto').value;
//       this.pz = document.getElementById('pzPonto').value;
//       this.carga = document.getElementById('cargaPonto').value;
//       obj = new PontoView(4,parseFloat(this.px),parseFloat(this.py),parseFloat(this.pz));
//       tela1.cena3D.addPonto(obj);
//       controlador.objeto.addObjetoModel("ponto", parseFloat(this.carga));
//       tela1.cena3D.removeVetorView();
//       tela1.cena3D.atualizaLabels();
//     }else if(CLICKED == "anelBotao") {
//       this.raio = document.getElementById('raio').value
//       this.px = document.getElementById('pxI').value;
//       this.py = document.getElementById('pyI').value;
//       this.pz = document.getElementById('pzI').value;
//       this.carga = document.getElementById('cargaI').value; 
//       obj = new AnelView(parseFloat(this.raio),parseFloat(this.px),parseFloat(this.py),parseFloat(this.pz));
//       tela1.cena3D.removeVetorView();
//       tela1.cena3D.addObjeto(obj);
//       controlador.objeto.addObjetoModel("anel", parseFloat(this.carga));
//     }else if(CLICKED == "discoBotao") {
//       this.raio = document.getElementById('raio').value
//       this.px = document.getElementById('pxI').value;
//       this.py = document.getElementById('pyI').value;
//       this.pz = document.getElementById('pzI').value;
//       this.carga = document.getElementById('cargaI').value;
//       obj = new DiscoView(parseFloat(this.raio),parseFloat(this.px),parseFloat(this.py),parseFloat(this.pz));
//       tela1.cena3D.addObjeto(obj);
//       tela1.cena3D.removeVetorView();
//       controlador.objeto.addObjetoModel("disco", parseFloat(this.carga));
//     }else if(CLICKED == "linhaBotao") {
//       this.comprimento = document.getElementById('comprimento').value
//       this.px = document.getElementById('pxLinha').value;
//       this.py = document.getElementById('pyLinha').value;
//       this.pz = document.getElementById('pzLinha').value;
//       this.carga = document.getElementById('cargaLinha').value;
//       obj = new LinhaView(parseFloat(this.comprimento),parseFloat(this.px),parseFloat(this.py),parseFloat(this.pz));
//       tela1.cena3D.addObjeto(obj);
//       tela1.cena3D.removeVetorView();      
//       controlador.objeto.addObjetoModel("linha", parseFloat(this.carga));
//     }
//     else{
//       alert(" BarraLateral.js/ id do objeto nao encontrado ");
//     }
//   }

//   this.fecharPop = function(){
//     if(CLICKED == "pontoBotao") {
//       document.getElementById('popupPonto').style.display = 'none';
//     }
//     if(CLICKED == "anelBotao" || CLICKED == "discoBotao" ){
//       document.getElementById('popup').style.display = 'none';
//     }
//     if(CLICKED == "linhaBotao"){
//        document.getElementById('popupBarra').style.display = 'none';
//     }
//     document.getElementById('divTrans').style.display = 'none';
//   }

// }

// // função generica para fechar o popup e inserir objeto
// function myFunction() {
//   tela1.barraLateral.fecharPop(); 
//   tela1.barraLateral.insereObj();
// }

// function fecharpopup(){
//   tela1.barraLateral.fecharPop(); 
// }

// function limpar(){
//   location.reload();
// }