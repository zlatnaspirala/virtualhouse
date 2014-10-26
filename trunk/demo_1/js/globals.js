
        var blocker = document.getElementById( 'blocker' );
        var instructions = document.getElementById( 'instructions' );




            if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;

            var container,stats;

            var camera, scene, loaded;
            var renderer;

            var currentScene;


            var controls,time = Date.now();
            var dt = 1/60;
            var walls=[], balls=[], ballMeshes=[], boxes=[], boxMeshes=[], blenderBoxMeshes = [], blenderBoxes=[];

            var mesh, zmesh, geometry;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

