import * as THREE from 'three'

const birds = {}

birds.randomPosition = () => {
  return {
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5
  }
}

birds.randomColour = () => {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

birds.create = () => {
  const geo = new THREE.SphereGeometry(0.2, 20, 20)
  const mat = new THREE.MeshBasicMaterial({ color: birds.randomColour() })
  const birdObject = new THREE.Mesh(geo, mat)
  // const pos = birds.randomPosition()
  birdObject.position.x = 0
  birdObject.position.y = 0.2
  birdObject.position.z = 0
  return {
    obj3D: birdObject,
    direction: null
  }
}

birds.createMany = (amount) => {
  return (new Array(amount)).fill(null).map(birds.create)
}

export default {
  create: birds.create,
  createMany: birds.createMany
}
