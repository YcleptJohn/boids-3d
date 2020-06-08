import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sceneCreator = {}
sceneCreator.create = (options) => {
  let controls
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  if (options.enableOrbitControls) controls = new OrbitControls(camera, renderer.domElement)

  camera.position.z = 6
  camera.position.y = 3
  if (controls) controls.update()

  var gridHelper = new THREE.GridHelper(10, 10, 0xFFFFFF, 0xFFFFFF)
  scene.add(gridHelper)

  var axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  return {
    scene, camera, renderer, controls
  }
}

export default {
  create: sceneCreator.create
}
