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
}

// window.onclick = () => {
//   scene.add(birds.create().obj3D)
// }

function anim () {
  requestAnimationFrame(anim)
  // birdies[0].obj3D.position.x += 0.01]
  // const b = birdies[0].obj3D
  // b.position.x = b.position.x + (Math.cos(165) * 0.01)
  // b.position.y = b.position.y + (Math.sin(165) * 0.01)
  birdies.forEach(b => {
    if (b.direction) {
      if (b.direction === 'east') b.obj3D.position.x += 0.01
      if (b.direction === 'west') b.obj3D.position.x -= 0.01
      if (b.direction === 'north') b.obj3D.position.z += 0.01
      if (b.direction === 'south') b.obj3D.position.z -= 0.01
      if (b.direction === 'up') b.obj3D.position.y += 0.01
      if (b.direction === 'down') b.obj3D.position.y -= 0.01
    }
  })
  renderer.render(scene, camera)
}
