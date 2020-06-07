import * as THREE from 'three'

import sceneCreator from './sceneCreator.js'
import birds from './birds.js'

const {
  scene, camera, renderer
} = sceneCreator.create({ enableOrbitControls: true })

start()

function start () {
  console.log(birds.createMany(5))
  birds.createMany(5).forEach(b => scene.add(b.obj3D))

  var gridHelper = new THREE.GridHelper(10, 10, 0xFFFFFF, 0xFFFFFF)
  scene.add(gridHelper)

  var light = new THREE.DirectionalLight(0xFFFFFF, 1)
  light.position.set(-1, 2, 4)
  scene.add(light)

  anim()
}

window.onclick = () => {
  scene.add(birds.create().obj3D)
}

function anim () {
  requestAnimationFrame(anim)
  renderer.render(scene, camera)
}
