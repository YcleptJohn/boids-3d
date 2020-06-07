import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


let scene, cam, cube, renderer

init()
anim()

function init() {
  scene = new THREE.Scene()
  cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  var controls = new OrbitControls(cam, renderer.domElement)

  var geometry = new THREE.BoxGeometry()
  var material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
  cube = new THREE.Mesh( geometry, material )
  scene.add(cube)

  cam.position.z = 5;
  controls.update()

  var gridHelper = new THREE.GridHelper(10, 10, 0xFFFFFF, 0xFFFFFF)
  scene.add(gridHelper)

  var light = new THREE.DirectionalLight(0xFFFFFF, 1)
  light.position.set(-1, 2, 4);
  scene.add(light)

}

function anim() {
  requestAnimationFrame(anim)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, cam)
}