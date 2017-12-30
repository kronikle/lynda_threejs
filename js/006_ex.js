function init() {

    //elementi essenziali
    //scena
    var scene = new THREE.Scene();

    

    //camera
    var camera = new THREE.PerspectiveCamera(
        45, //field of view 
        window.innerWidth / window.innerHeight, //aspect ratio
        1,//near plane
        1000 //far plane
    );

    //renderer
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight); //size of renderer
    document.getElementById('webgl').appendChild(renderer.domElement); //per vedere il risultato creo un elemento DOM

    //nel renderer processi la scena e la camera
    renderer.render(
        scene,
        camera
    );
}

init();

//elementi 3d vogliono geometria e shader