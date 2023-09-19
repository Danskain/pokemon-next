import {
  Mesh,
  SphereGeometry,
  TextureLoader,
  BackSide,
  MeshPhongMaterial,
} from "three"

export default class Skybox {
  constructor(scene) {
    const skyGeometry = new SphereGeometry(360, 25, 25)
    const loader = new TextureLoader()
    const textura = loader.load('/custom-sky.png')
    const materialTwo = new MeshPhongMaterial({
      map: textura
    }) 
    const skybox = new Mesh(skyGeometry, materialTwo)
    skybox.material.side = BackSide
    scene.add(skybox)
  }
  render() {
    return (
      <div>Skybox</div>
    )
  }
}
