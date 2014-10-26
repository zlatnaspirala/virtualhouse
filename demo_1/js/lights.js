//-----------------------

//-----------------------
function CREATE_SPOT_LIGHT(COLOR_ , x_ , y_ , z_ ){

light = new THREE.SpotLight( COLOR_  );
light.position.set(x_, y_ + 50, z_ );
light.target.position.set( x_, y_ , z_ );
light.castShadow = true;

light.shadowCameraNear = 67;
light.shadowCameraFar = 64;//camera.far;
light.shadowCameraFov = 44;

light.shadowMapBias = 0.5;
light.shadowMapDarkness = 0.7;
light.shadowMapWidth = 2*512;
light.shadowMapHeight = 2*512;
scene.add( light );


var cube = new THREE.Mesh(new THREE.CubeGeometry(12, 12, 12), new THREE.MeshBasicMaterial({
wireframe: true,
color: 'blue'
}));
cube.position.set(x_, y_ + 50, z_ );
scene.add(cube);


}


function CREATE_AMBIENT_LIGHT( color_ , x_ , y_ , z_ , power){

var ambient = new THREE.AmbientLight( color_, power );

ambient.position.set( x_ , y_ , z_)
scene.add( ambient ); 

}




/*
light = new THREE.SpotLight( 0xffeeee );
light.position.set( 10, 30, 20 );
light.target.position.set( 0, 0, 0 );
light.castShadow = true;

light.shadowCameraNear = 20;
light.shadowCameraFar = 50;//camera.far;
light.shadowCameraFov = 40;

light.shadowMapBias = 0.1;
light.shadowMapDarkness = 0.7;
light.shadowMapWidth = 2*512;
light.shadowMapHeight = 2*512;
scene.add( light );

*/

function P_LIGHT( color_ , x_ , y_ , z_ , power , power2){
var light = new THREE.PointLight(color_, power , power2 );
light.position.set( x_ , y_ , z_ );
scene.add( light );
var material = new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), material);
cube.position.set(x_ , y_ , z_);
//cube.overdraw = true
//scene.add(cube);



	var geometry = new THREE.SphereGeometry( 0.001, 0.001, 1 );
	var material = new THREE.MeshLambertMaterial( { color: 0x000088 , transparent : true } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(x_ , y_ , z_);
	scene.add(mesh);
	
	// SUPER SIMPLE GLOW EFFECT
	// use sprite because it appears the same from all angles
	var spriteMaterial = new THREE.SpriteMaterial( 
	{ 
		map: new THREE.ImageUtils.loadTexture( 'images/glow.png' ), 
		useScreenCoordinates: false, alignment: THREE.SpriteAlignment.center,
		color: 0x0000ff, transparent: false, blending: THREE.AdditiveBlending
	});
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(3, 3, 1.0);
	mesh.add(sprite); // this centers the glow at the mesh
	



}

