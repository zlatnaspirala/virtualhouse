

           function initCannon(){
                // Setup our world
                world = new CANNON.World();
                world.quatNormalizeSkip = 0;
                world.quatNormalizeFast = false;
                world.solver.setSpookParams(300,10);
                world.solver.iterations = 5;
                world.gravity.set(0,-20,0);
                world.broadphase = new CANNON.NaiveBroadphase();

                // Create a slippery material (friction coefficient = 0.0)
                physicsMaterial = new CANNON.Material("slipperyMaterial");
                var physicsContactMaterial = new CANNON.ContactMaterial(physicsMaterial,
                                                                        physicsMaterial,
                                                                        0.0, // friction coefficient
                                                                        0.3  // restitution
                                                                        );
                // We must add the contact materials to the world
                world.addContactMaterial(physicsContactMaterial);

                // Create a sphere
                var mass = 5, radius = 1.3;
                sphereShape = new CANNON.Sphere(radius);
                sphereBody = new CANNON.RigidBody(mass,sphereShape,physicsMaterial);
                sphereBody.position.set(0,5,0);
                sphereBody.linearDamping = 0.05;
                world.add(sphereBody);



                // Create a plane
                var groundShape = new CANNON.Plane();
                var groundBody = new CANNON.RigidBody(0,groundShape,physicsMaterial);
                groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
                world.add(groundBody);

            }

			
			