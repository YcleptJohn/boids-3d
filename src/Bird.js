import randomisation from './randomisation.js'
import * as THREE from 'three'

class Bird {
  constructor (scene, position) {
    const geo = new THREE.SphereGeometry(0.2, 20, 20)
    const mat = new THREE.MeshBasicMaterial({ color: randomisation.generateColour() })
    this.obj = new THREE.Mesh(geo, mat)

    position = position || randomisation.generatePosition()
    this.obj.position.x = position.x
    this.obj.position.y = position.y
    this.obj.position.z = position.z

    this.destination = null
    this.totalTicks
    scene.add(this.obj)
  }

  decideDestination () {
    if (!this.destination || Math.random() > 0.95) {
      const ps = (new Array(3)).fill(null).map(v => (Math.random() * 100) - 50)
      this.destination = new THREE.Vector3(ps[0], ps[1], ps[3])
    }
    if (Math.random() > 0.8) {
      const m = (new Array(3)).fill(null).map(v => (Math.random() * 20) - 10)
      this.destination = (new THREE.Vector3()).subVectors(this.destination, new THREE.Vector3(m[0], m[1], m[2]))
    }

    // Attempt at correcting boundary flights
    const origin = new THREE.Vector3(0, 0, 0)
    if (this.obj.position.distanceTo(origin) > 5) this.destination = origin
  }

  doFlyTick () {
    this.decideDestination()
    this.obj.translateOnAxis(this.destination, 0.001)
    this.totalTicks++
    console.log('c')
  }
}

export default Bird