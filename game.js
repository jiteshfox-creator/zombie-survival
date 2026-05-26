const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x111111, 10, 150);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(10, 20, 10);
scene.add(sun);

const groundGeo = new THREE.PlaneGeometry(500, 500);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x333333
});

const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// PLAYER CAR

const car = new THREE.Group();

const carBody = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1, 4),
  new THREE.MeshStandardMaterial({ color: 0x0066ff })
);

car.add(carBody);
scene.add(car);

car.position.y = 1;

// CAMERA MODES

let thirdPerson = true;

window.addEventListener("keydown", (e) => {
  if (e.key === "v") {
    thirdPerson = !thirdPerson;
  }
});

// HEALTH
animate();