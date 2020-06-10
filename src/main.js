import * as THREE from 'three'

import sceneCreator from './sceneCreator.js'
import birds from './birds.js'

const {
  scene, camera, renderer
} = sceneCreator.create({ enableOrbitControls: true })

const birdies = []

start()
function start () {
  // birds.createMany(500).forEach(b => scene.add(b.obj3D))
  birdies.push(birds.create())
  birdies.forEach(bird => scene.add(bird.obj3D))
  console.log(birdies)

  var light = new THREE.DirectionalLight(0xFFFFFF, 1)
  light.position.set(-1, 2, 4)
  scene.add(light)

  anim()
}

window.onkeypress = (x) => {
  if (x.key === 'q') birdies[0].direction = 'up'
  if (x.key === 'e') birdies[0].direction = 'down'
  if (x.key === 'w') birdies[0].direction = 'north'
  if (x.key === 's') birdies[0].direction = 'south'
  if (x.key === 'd') birdies[0].direction = 'east'
  if (x.key === 'a') birdies[0].direction = 'west'
  if (x.key === 'c') birdies[0].direction = null
  if (x.key === 'r') {
    birdies.forEach(b => {
      b.obj3D.position.x = 0
      b.obj3D.position.y = 0
    })
  }
}

function anim () {
  requestAnimationFrame(anim)
  birdies.forEach(b => {
    const ps = (new Array(3)).fill(null).map(v => (Math.random() * 100) - 50)
    console.log(ps)
    b.obj3D.translateOnAxis(new THREE.Vector3(ps[0], ps[1], ps[3]), 0.01)
  })
  renderer.render(scene, camera)
}
