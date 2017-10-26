// ** Define a classe principal Tela ** //
var Tela = function() {
  this.cena3D = new Cena3D(document.getElementsByTagName("main")[0]);
  
};

function startTutorial(){
  if(varPopTutorial === null){
    setTimeout( startTutorial , 400);
    return;
  }

  callPopUp(varPopTutorial);

  setTimeout(function() {
    var buttons = document.querySelectorAll(".btn_close")[0];
    buttons.addEventListener("mousedown", closePopUp );

  }, 400);

}

var menuNumbers = null;


 /*!
 * 
 * This method is called when click in setts in menu
 * is push
 *
 */
function addSettsPopUp() {
   callPopUp(varPopSettings);

   setTimeout(function() {

    var buttons = document.querySelectorAll(".btn_close")[0];
    buttons.addEventListener("mousedown", _close_set_configuration );

    buttons = document.querySelectorAll(".btn_add")[0];
    buttons.addEventListener("mousedown", _save_new_configuration);
    buttons.setAttribute("state", "disable");
  }, 400);

}

 /*!
 * 
 * This method is called when click in help in menu
 * is push
 *
 */
function addHelpPopUp() {
   callPopUp(varPopAjuda);

    setTimeout(function() {

    var buttons = document.querySelectorAll(".btn_close")[0];
    buttons.addEventListener("mousedown", _close_set_configuration );

    buttons = document.querySelectorAll(".btn_add")[0];
    buttons.addEventListener("mousedown", _save_new_configuration);
    buttons.setAttribute("state", "disable");

  }, 400);

}
 /*!
 * 
 * This method is called when click in object in main scene 
 * is push
 *
 */
function addObjectPopUp() {
  callPopUp(addPopUpContent);

  setTimeout(function() {
    var buttons = document.querySelectorAll(".grid_iten.col_objetos");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mousedown", imgSelect);
      buttons[i].setAttribute("selected", false);
    }
    buttons = document.querySelectorAll(".btn_close")[0];
    buttons.addEventListener("mousedown", closePopUp);

    buttons = document.querySelectorAll(".btn_add")[0];
    buttons.addEventListener("mousedown", addObjetct);
    buttons.setAttribute("state", "disable");

    // menuNumbers = document.getElementById("scene_nums");


    // setNumbersInMenu(document.getElementById("scene_nums"), 0);
    // setNumbersInMenu(document.getElementById("scene_nums"), 10);
  }, 400);
}

 /*!
 * 
 * This method is called when an object add button 
 * is push
 *
 */
function addObjetct() {
  console.log("add object" + menuSelected);
  //closePopUp();
  var type = menuSelected.getAttribute("object_type");
  if (!type) return;
  var nums = getNumbersFromMenu(document.getElementById("scene_nums"));

  insertObject(nums, type);
}


 /*!
 * This method change the configuration of dynamic 
 * popup add objects
 *
 */
var menuSelected = null;
function imgSelect() {
  var buttons = document.querySelectorAll(".grid_iten.col_objetos");
  for (var i = 0; i < buttons.length; i++)
    buttons[i].classList.remove("active");
  this.classList.add("active");
  menuSelected = this;
  var selecteds = this.getAttribute("name");
  var texts = document
    .querySelectorAll(".list_description_popup")[0]
    .getElementsByTagName("p");
  for (i = 0; i < texts.length; i++) {
    if (texts[i].getAttribute("name") == selecteds) {
      texts[i].setAttribute("state", "show");
        var isPopupWork = document.getElementById('menu_demo_var');
        if (isPopupWork) isPopupWork.innerHTML = "";
      switch (selecteds) {
        case "dcharge":
          document.getElementById("menu_demo").innerHTML = varPopObjectMenu;
          setNumbersInMenu(document.getElementById("scene_nums"), {
            px: 0,
            py: 0,
            pz: 4,
            sx: 0,
            sy: 0,
            sz: 0,
            cg: 10,
          });
          menuNumbers = document.getElementById("scene_nums");
        break;
        case "dot":
          document.getElementById("menu_demo").innerHTML = varPopObjectMenu;
          setNumbersInMenu(document.getElementById("scene_nums"),  {
            px: 0,
            py: 0,
            pz: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            cg: 10,
          });
          menuNumbers = document.getElementById("scene_nums");
        break;
        case "ring":
          document.getElementById("menu_demo").innerHTML = varPopObjectMenuCirc;
          setNumbersInMenu(document.getElementById("scene_nums"),  {
            px: 0,
            py: 0,
            pz: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            cg: 10,
            ra: 4,
          });
          menuNumbers = document.getElementById("scene_nums");
        break;
        case "line":
          document.getElementById("menu_demo").innerHTML = varPopObjectMenuLine;
          setNumbersInMenu(document.getElementById("scene_nums"),  {
            px: 0,
            py: 0,
            pz: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            cg: 10,
            cm: 5,
          });
          menuNumbers = document.getElementById("scene_nums");
        break;
        case "disc":
          document.getElementById("menu_demo").innerHTML = varPopObjectMenuCirc;
          setNumbersInMenu(document.getElementById("scene_nums"),  {
            px: 0,
            py: 0,
            pz: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            cg: 10,
            ra: 3,
          });
          menuNumbers = document.getElementById("scene_nums");
        break;
        case "work":
          document.getElementById("menu_demo_var").innerHTML = varPopWorkMenu;
          setNumbersInJobMenu();
        break;
      }
    } else {
      texts[i].setAttribute("state", "hide");
      // document.getElementById('popupCena').setAttribute("state","hide");
    }
  }
  document.querySelectorAll(".btn_add")[0].setAttribute("state", "enable");
}


 /*!
 * This method set the dynamic 
 * popup of dots on work window
 *
 */
function setNumbersInJobMenu() {
  var pts = tela.cena3D.listPontosView();
  // alert("pts: "+pts);
  for (var i = 0; i < pts.length; i++) { // for each dot 
    initialSelect = document.getElementById('sleI');
    finalSelect = document.getElementById('sleF');
    initialSelect.options[initialSelect.options.length] = new Option("P"+i, i);
    finalSelect.options[finalSelect.options.length] = new Option("P"+i, i);    
  }
}

function changeSelectedObject(){
  console.log("change");
  change(getNumbersFromMenu( document.getElementById("popupCena") ) );
  
}
function removeSelectedObject(){
  console.log("remove");
  remove();//removeObject(tela.cena3D.OBJ);

}


function calcPopUp() {
  callPopUp(varPopUpContent);
  setTimeout(function() {
    var buttons = document.querySelectorAll(".grid_iten.col_objetos");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mousedown", imgSelect);
      buttons[i].setAttribute("selected", false);
    }

    buttons = document.querySelectorAll(".btn_close")[0];
    buttons.addEventListener("mousedown", closePopUp);

    buttons = document.querySelectorAll(".btn_add")[0];
    buttons.addEventListener("mousedown", calcObjetct);
    buttons.setAttribute("state", "disable");
  }, 400);
}

function calcObjetct() {
  console.log("calcObjetct" + menuSelected);
  var type = menuSelected.getAttribute("object_type");
    switch (type) {
      case "field":
        calcField();
      break;
      case "force":
        calcForce();
      break;
      case "potential":
        calcPot();
      break;
      case "work":
        var pi = document.getElementById('sleI').value;
        var pf = document.getElementById('sleF').value;
        calcWork(pi, pf);
      break;
    }

    setTimeout( closePopUp , 200);
}

var popUpDialog = null;
function callPopUp(value) {

  var isPopupCena = document.getElementById('popupCena');
  if (isPopupCena) isPopupCena.setAttribute("state","hide");
  

  if (!popUpDialog) {
    popUpDialog = document.getElementsByClassName("page_block")[0];
  }
  popUpDialog.innerHTML = value;
  popUpDialog.setAttribute("state", "show");

  var menus = document.getElementsByClassName("menu_button");
  for (var i = 0; i < menus.length; i++)
    menus[i].setAttribute("state", "hide");
}

function closePopUp() {
  if (!popUpDialog) {
    popUpDialog = document.getElementsByClassName("page_block")[0];
  }
  menuSelected = null;
  menuNumbers = null;
  popUpDialog.setAttribute("state", "hide");
  setTimeout(function() {
    popUpDialog.innerHTML = "";
  }, 400);
  var menus = document.getElementsByClassName("menu_button");
  for (var i = 0; i < menus.length; i++)
    menus[i].setAttribute("state", "show");
}

function getNumbersFromMenu(div) {
  //menuNumbers
  //scene_nums
  alert("AAAAAAAAAAA");
  var iten = div.getElementsByClassName("sliders");
  var object = {};
  for (var i = 0; i < iten.length; i++) {
    object[iten[i].getAttribute("data")] = iten[i].getElementsByTagName(
      "input"
    )[0].value;
  }
  return object;
}

function setNumbersInMenu(div, value) {
  var iten = div.getElementsByClassName("sliders");
  var ipt = null;
  for (var i = 0; i < iten.length; i++){
    ipt = iten[i].getElementsByTagName("input");
    if(ipt && ipt.length > 0 )ipt[0].value = value[ iten[i].getAttribute("data") ] ;
  }
}


 /*!
 * This method insert an object in scene 
 *  called by addObjetct()
 *
 * \param nums, a vector of object params
 * \param type, the type of an object defined in hmtl
 */
function insertObject(nums, type) {
  console.log(nums + "   " + type);
  switch (type) {
    case "dcharge":
      obj = new ChargeView(0.05, parseFloat(nums.cg), parseFloat(nums.px), parseFloat(nums.py), parseFloat(nums.pz), parseFloat(nums.sx),parseFloat(nums.sy),parseFloat(nums.sz));
      tela.cena3D.addDot(obj);
    break;
    case "dot":
      obj = new DotView(0.1, parseFloat(nums.cg), parseFloat(nums.px), parseFloat(nums.py), parseFloat(nums.pz));
      tela.cena3D.addObject(obj);
    break;
    case "ring":
      obj = new RingView(parseFloat(nums.ra), parseFloat(nums.cg), parseFloat(nums.px), parseFloat(nums.py), parseFloat(nums.pz), parseFloat(nums.rx), parseFloat(nums.ry), parseFloat(nums.rz)); // change raio atribut
      tela.cena3D.addObject(obj); 
    break;
    case "line":
      obj = new LineView(parseFloat(nums.cm), parseFloat(nums.cg), parseFloat(nums.px), parseFloat(nums.py), parseFloat(nums.pz), parseFloat(nums.rx), parseFloat(nums.ry), parseFloat(nums.rz));
      tela.cena3D.addObject(obj); 
    break;
    case "disc":
      obj = new DiscView(parseFloat(nums.ra), parseFloat(nums.cg), parseFloat(nums.px), parseFloat(nums.py), parseFloat(nums.pz), parseFloat(nums.rx), parseFloat(nums.ry), parseFloat(nums.rz));
      tela.cena3D.addObject(obj); 
    break;
  }
  tela.cena3D.removeVetorView();
  //tela1.cena3D.atualizaLabels();
  tela.cena3D.setRenderState(true);
  return;
}

/** Functions related settings configuration*/
function show_set_configuration() {
  document.getElementById("popupConfiguration").style.display = "block";
  document.getElementById("divTrans").style.display = "block";
  document.getElementById("popupConfiguration").style.position = "absolute";
  document.getElementById("popupConfiguration").style.left = "50%";
  document.getElementById("popupConfiguration").style.top = "20%";
}

function _close_set_configuration() {
  closePopUp();
  return;

//  document.getElementById("popupConfiguration").style.display = "none";
//  document.getElementById("divTrans").style.display = "none";
}

function _save_new_configuration() {

  closePopUp();

  var langs = document.getElementById('inlineFormCustomSelect').getElementsByTagName("option")

  var i = 0;

  var element;
  var selection = null;
  for ( i = 0; i < langs.length; i++) {
    element = langs[i];
    if(element.selected){
      selection = element.getAttribute("data");
    }
  }

  if( currentLang !== selection ){
    changeLang(selection);
  }

  //* Change the precision*/
  var _precision = document.getElementById("precisionSelected").value;
  PRECISION = parseInt(_precision);
  //* Change the precision*/
  var _labels = document.getElementById("labelsSelected").checked;
  LABELS = _labels;
  //* Change the precision*/
  var _axes = document.getElementById("axesSelected").checked;
  HELP_AXIS = _axes;
  //* Change the precision*/
  var _xOyPlane = document.getElementById("xOyPlaneSelected").checked;
  HELP_PLANE_xOy = _xOyPlane;
  var _yOzPlane = document.getElementById("yOzPlaneSelected").checked;
  HELP_PLANE_yOz = _yOzPlane;
  var _xOzPlane = document.getElementById("xOzPlaneSelected").checked;
  HELP_PLANE_xOz = _xOzPlane;
  //* Close and change the current settings /
  _close_set_configuration();
  tela.cena3D.atualizaLabels();
  tela.cena3D.drawPlanes_xOy();
  tela.cena3D.drawPlanes_yOz();
  tela.cena3D.drawPlanes_xOz();
  tela.cena3D.drawAxes();
}
//end settings configurations