
            function createLoadScene() {

			
                var result = {

                    scene:  new THREE.Scene(),
                    camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

                };

                result.camera.position.z = 100;
/*
                var object, geometry, material, light, count = 12, range = 200;

                material = new THREE.MeshLambertMaterial( { color:0xffffff } );
                geometry = new THREE.CubeGeometry( 5, 5, 5 );

                for( var i = 0; i < count; i++ ) {

                    object = new THREE.Mesh( geometry, material );

                    object.position.x = ( Math.random() - 0.5 ) * range;
                    object.position.y = ( Math.random() - 0.5 ) * range;
                    object.position.z = ( Math.random() - 0.5 ) * range;

                    object.rotation.x = Math.random() * 6;
                    object.rotation.y = Math.random() * 6;
                    object.rotation.z = Math.random() * 6;

                    object.matrixAutoUpdate = false;
                    object.updateMatrix();

                    result.scene.add( object );

                }

                result.scene.matrixAutoUpdate = false;

                light = new THREE.PointLight( 0xffffff );
                result.scene.add( light );

                light = new THREE.DirectionalLight( 0x111111 );
                light.position.x = 1;
                result.scene.add( light );

               
			*/
			
			 return result;
            }

