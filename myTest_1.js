//import { Camera } from "three";

function init() {

    //elementi essenziali
    //scena
    var scene = new THREE.Scene();

   
    var plane1 = getPlane(4);
    var plane2 = getPlane(3);

    /*  .add assegna un nome all'oggetto
        diventa più semplice "chiamarlo" per assegnargli metodi
        e può essere gettato continuamente ed inserito in 
        una variabile nella funzione update() */
    plane1.name = 'plane-1';
    plane2.name = 'plane-2';

    
    plane1.rotation.x = Math.PI / 2;
    plane1.position.y = 1;
    
    
    plane2.position.x = 3;
    plane2.position.y = 2;
    plane2.rotation.x = Math.PI / 4;

    plane1.add(plane2);
    scene.add(plane1);
    //scene.add(plane2);
    

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

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    update(renderer, scene, camera);
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
function update(renderer, scene, camera) {
    renderer.render(
        scene,
        camera
    );


    var plane1 = scene.getObjectByName('plane-1');
    plane1.rotation.y += 0.001;
    plane1.rotation.z += 0.001;


    var plane2 = scene.getObjectByName('plane-2');

    requestAnimationFrame(function () {
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
