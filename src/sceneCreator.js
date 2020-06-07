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

  camera.position.z = 5
  if (controls) controls.update()

  return {
    scene, camera, renderer, controls
  }
}

export default {
  create: sceneCreator.create
}
