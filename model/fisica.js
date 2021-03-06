/*!
 * \file phisics.js
 * \brief phisics math
 * @author Douglas Lohmann <dlohmann0@gmail.com>
 *
 * This file has the phisics functions to
 * calculate.
 *
 */

 /*!
 * This method calculate the resulting eletric fild
 * generated by vert to dot.
 * The current is distributed on vert vectors.
 *
 * \param vert, vector of THREE.vector3
 * \param dot, THREE.vector3 represent the position
 * \param current, the distribution of current
 */
function calc_magnetic_field(vert, dot, current){

	// alert("Number of dots: "+vert.length);
	// alert("VECTOR : "+vert[0].x+", "+vert[0].y+", "+vert[0].z );
	// alert("VECTOR : "+vert[3].x+", "+vert[3].y+", "+vert[3].z );
 //    alert("dot : "+dot.x+", "+dot.y+", "+dot.z );
 //    alert("current: "+ current);

	var mi_0 = Math.pow(10,-7);
    // var dl = ;
	var B = new THREE.Vector3();  // sum of all dots
	var dB = new THREE.Vector3(); // for each dot of object

	var distance_vector = new THREE.Vector3(0,0,0);
	var unit_vector = new THREE.Vector3(0,0,0);
  var dl_vetor = new THREE.Vector3(0,0,0);
  var v_cross = new THREE.Vector3(0,0,0);
	var distance = 0;

	// cosntants
	var k = 0;
  var const_dq = 0;
  var i = 0;
	dot2 = dot.clone();
	dot2 = dot2.multiplyScalar(0.01);

	for (i = 0; i < vert.length-1; i++){
  	// dot = dot.multiplyScalar(0.01); // change to cm
		aux_vet1 = vert[i].clone();
		aux_vet2 = vert[(i+1)].clone();
		dl_vetor = aux_vet2.sub(aux_vet1);

        // alert("dl_vetor : "+dl_vetor.x+", "+dl_vetor.y+", "+dl_vetor.z);
		// var aux = new THREE.Vector3(vert[0].x,);
		aux_1 = vert[i].clone();
		aux_2 = vert[i].clone();
		aux_3 = dot2.clone();
		distance_vector = aux_3.sub(aux_1); // distance r_vetor
		// alert("distance_vector: "+distance_vector.x+", "+distance_vector.y+", "+distance_vector.z);
		unit_vector = distance_vector.normalize();
		// alert("UNIT: "+unit_vector.x+", "+unit_vector.y+", "+unit_vector.z);
		distance = aux_2.distanceTo(dot2); // distance module rModule
		// alert("distance"+distance);
		v_cross.crossVectors( dl_vetor, unit_vector );
        k = mi_0*current/Math.pow(distance,2);
		dB = v_cross.multiplyScalar(k);
 		B.add(dB);
		// alert("VECTOR "+i+": "+E.x+", "+E.y+", "+E.z );
	}
	return B;
};
