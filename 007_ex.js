function init() {

    //elementi essenziali
    //scena
    var scene = new THREE.Scene();

    var box = getBox(1, 1, 1);
    scene.add(box);

    //camera
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = -1;
    camera.position.z = 5;

    //renderer
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);

    //nel renderer processi la scena e la camera
    renderer.render(
        scene,
        camera
    );
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

init();
