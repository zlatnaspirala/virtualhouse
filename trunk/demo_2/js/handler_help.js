


	function $( id ) {return document.getElementById( id );}





	function handle_update( result, pieces ) {

	refreshSceneView( result );
	//renderer.initWebGLObjects( result.scene );

	var m, material, count = 0;

	for ( m in result.materials ) {

	material = result.materials[ m ];
	if ( ! ( material instanceof THREE.MeshFaceMaterial ) ) {

	if( !material.program ) {

	console.log(m);
	renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

	count += 1;
	if( count > pieces ) {

	//console.log("xxxxxxxxx");
	break;

	}

	}

	}

	}

	}


	
	
	
	
	
	
	//
	
	
	
	
	
	
	
	
            function setButtonActive( id ) {

                $( "start" ).style.backgroundColor = "green";

            }
			
			
			
			
			
			
			