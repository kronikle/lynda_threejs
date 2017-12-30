//import { Camera } from "three";

function init() {

    //elementi essenziali
    //scena
    var scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(0xffffff, 0.2); // arg(color, density)



    var box = getBox(1, 1, 1);
    var plane = getPlane(20);
    

    plane.name = 'plane-1';

    box.position.y = box.geometry.parameters.height/2;
    plane.rotation.x = Math.PI/2;

  
    scene.add(box);
    scene.add(plane);

    //camera
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 5;

    //renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('rgb(255, 255, 255)');
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);

    /* //questo chiama il render una volta sola
    //nel renderer processi la scena e la camera
    renderer.render(
        scene,
        camera
    ); */

    // questa funziona chiama il render
    // in maniera ricorsiva per renderizzare
    // la scena ad ogni ciclo
    update   ( renderer, scene, camera);
    return scene;
}




function getBox(w, h, d) {
    //ogni elemento 3d è formato da una geometria ed un materiale
    //forma della mesh
    var geometry = new THREE.BoxGeometry(w, h, d);
    //come l'oggetto reagisce alle luci della scena
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    //si crea la mesh unendo geometria e materiale
    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh;
}

function getPlane(size) {
    //ogni elemento 3d è formato da una geometria ed un materiale
    //forma della mesh
    var geometry = new THREE.PlaneGeometry(size, size);
    //come l'oggetto reagisce alle luci della scena
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide 
    });
    //si crea la mesh unendo geometria e materiale
    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh; 
}

// funzione ricorsiva che chiama se stessa
// per effettuare il render ad ogni ciclo
function update(renderer, scene, camera){
    renderer.render(
        scene,
        camera
    );

    requestAnimationFrame (function() {
        update(renderer, scene, camera);
    });
}

// facendo ritornare la scena e inserendo
// la funzione init in una variabile
// otteniamo la possibilità di accedere alle proprietà
// dell'oggetto dalla console del browser 
// chiamando il comando scene (nome variabile)
// e accedere ai parametri attraverso metodi
// scene.visible = false;
/* nella scena non cambia nulla perchè il render
    è chiamato una volta sola */
var scene = init();
