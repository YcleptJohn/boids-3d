import * as THREE from 'three';

let scene, cam, cube, renderer

init()
anim()

function init() {
  scene = new THREE.Scene()
  cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry()
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh( geometry, material )
  scene.add(cube)

  cam.position.z = 5;
}

function anim() {
  requestAnimationFrame(anim)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, cam)
}