var Texto = function(texto,px,py,pz) {
	var loader = new THREE.FontLoader();
		loader.load( 'view/fonts/helvetiker_bold.typeface.json',

		function ( font ) { 
			var options = {
			    size: 0.7,
			    height: 0.3,
			    bevelThickness: 0.2,
			    bevelSize: 0.2,
			    bevelEnabled: true,
			    bevelSegments: 2,
			    bevelEnabled: false,
			    curveSegments: 12,
			    steps: 1,
			    font: font,
			    style: "normal",
			    weight: "normal"
		    };
	        console.log("tela.cena3D.addTexto(text2);");
	        text2 = createMesh(new THREE.TextGeometry(texto, options));
	    	text2.rotation.y = Math.PI / 2;
	        text2.position.x = px;
	        text2.position.y = py;
	        text2.position.z = pz;
	        tela.cena3D.addTexto(text2);
	        // return text2;
		},
	    function ( xhr ) {
			console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	    }
	);

	function createMesh(geom) {
		console.log("antes");

            // assign two materials
//            var meshMaterial = new THREE.MeshLambertMaterial({color: 0xff5555});
//            var meshMaterial = new THREE.MeshNormalMaterial();
	    var meshMaterial = new THREE.MeshPhongMaterial({
	        specular: 0xff1a1a,
	        color: 0x0000ff,
	        shininess: 70,
	        metal: false
	    });
//            meshMaterial.side=THREE.DoubleSide;
            // create a multimaterial
    	var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    	return plane;
	}
}