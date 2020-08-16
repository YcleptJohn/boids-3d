import * as THREE from 'three'
const randomisation = {}

randomisation._generateAxisPoint = () => {
  return Math.random() * 10 - 5
}

randomisation.generatePosition = () => {
  return {
    x: randomisation._generateAxisPoint(),
    y: randomisation._generateAxisPoint(),
    z: randomisation._generateAxisPoint()
  }
}

randomisation.generateColour = () => {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

export default { ...randomisation }
