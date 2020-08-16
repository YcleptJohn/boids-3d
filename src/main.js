import * as THREE from 'three'

import sceneCreator from './sceneCreator.js'
import Bird from './Bird.js'

const {
  scene, camera, renderer
} = sceneCreator.create({ enableOrbitControls: true })

const birdies = []

start()
function start () {
  birdies.push(new Bird(scene))

  var light = new THREE.DirectionalLight(0xFFFFFF, 1)
  light.position.set(-1, 2, 4)
  scene.add(light)

  anim()
}

window.onkeypress = (x) => {
  if (x.key === 'r') {
    birdies.forEach(b => {
      b.obj.position.x = 0
      b.obj.position.y = 0
      b.obj.position.z = 0
    })
  }
}

function anim () {
  requestAnimationFrame(anim)
  birdies.forEach(b => {
    b.doFlyTick()
  })
  renderer.render(scene, camera)
}
