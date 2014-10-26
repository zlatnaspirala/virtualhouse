


            function initLoadScene() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var loadScene = createLoadScene();
                currentScene = 0;


                camera = loadScene.camera;
                scene = loadScene.scene;

                renderer = new THREE.WebGLRenderer();
                // renderer = new THREE.AnaglyphEffect();


                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.right = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );

                initCannon();


                $( "start" ).addEventListener( 'click', onStartClick, false );
                //onStartClick();

                var callbackProgress = function( progress, result ) {

                    var bar = 250,
                        total = progress.total_models + progress.total_textures,
                        loaded = progress.loaded_models + progress.loaded_textures;

                    if ( total )
                        bar = Math.floor( bar * loaded / total );

                    $( "bar" ).style.width = bar + "px";

                    count = 0;
                    for ( var m in result.materials ) count++;

                    handle_update( result, Math.floor( count/total ) );

                }

                var callbackFinished = function( result ) {

                    console.log(result.scene)

             
        
                var material = new THREE.MeshLambertMaterial( { color: 0xdddddd, wireframe: true } );
                    for (var i in result.scene.__objects)
                    {
                        obj = result.scene.__objects[i]
             
                        if (obj.name.slice(0,4) == 'Cube')
                        {
                            console.log(obj.name)
                            obj.castShadow = true;
                            obj.receiveShadow = true;
                            obj.useQuaternion = true;
                            obj.position.y = obj.position.y + 0.0;


                            var halfExtents = new CANNON.Vec3(obj.scale.x ,obj.scale.y , obj.scale.z );
                            var boxShape = new CANNON.Box(halfExtents);
                            var boxBody = new CANNON.RigidBody(0,boxShape);

                            var halfExtents = new CANNON.Vec3(1,1,1);
                            var boxShape = new CANNON.Box(halfExtents);
                            var boxGeometry = new THREE.CubeGeometry(halfExtents.x*2,halfExtents.y*2,halfExtents.z*2);

 
                            boxBody.quaternion.x = obj.quaternion.x;
                            boxBody.quaternion.y = obj.quaternion.y;
                            boxBody.quaternion.z = obj.quaternion.z;
                            boxBody.quaternion.w = obj.quaternion.w;

                         
                            boxBody.position.x = obj.position.x;
                            boxBody.position.y = obj.position.y;
                            boxBody.position.z = obj.position.z;

                            blenderBoxes.push(boxBody);
                            world.add(boxBody)

                     
                            


                        }



                    }
                    
 
                    // var scale = new THREE.Vector3(1,2,1);
                    // THREE.GeometryUtils.scale(result.scene, scale);


                    loaded = result;

                    $( "message" ).style.display = "none";
                    $( "progressbar" ).style.display = "none";
                    $( "start" ).style.display = "block";
                    $( "start" ).className = "enabled";

                    handle_update( result, 1 );


                }

                $( "progress" ).style.display = "block";

                var loader = new THREE.SceneLoader();
                loader.callbackProgress = callbackProgress;

                loader.load( "a1.js", callbackFinished );

                $( "plus_exp" ).addEventListener( 'click', createToggle( "exp" ), false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }
