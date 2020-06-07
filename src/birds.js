import * as THREE from 'three'

const birds = {}

birds.randomPosition = () => {
  return {
    x: Math.floor(Math.random() * 5 + 1),
    y: Math.floor(Math.random() * 5 + 1),
    z: Math.floor(Math.random() * 5 + 1)
  }
}

birds.create = () => {
  const geo = new THREE.BoxGeometry()
  const mat = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
  const birdObject = new THREE.Mesh(geo, mat)
  const pos = birds.randomPosition()
  birdObject.position.x = pos.x
  birdObject.position.y = pos.y
  birdObject.position.z = pos.z
  return {
    obj3D: birdObject
  }
}

birds.createMany = (amount) => {
  return (new Array(amount)).fill(null).map(birds.create)
}

export default {
  create: birds.create,
  createMany: birds.createMany
}
