import {
  Scene as SceneThree
} from "three"
import Camara from "../clases/Camara"
import Skybox from "../clases/Skybox"
import Luces from "../clases/Luces"
import Loader from "../clases/Loader"
import Logo from "../clases/objPokemon/Logo"

export default class Scene extends SceneThree {
  private camara: Camara 

  constructor(renderer) {
    super()
    const loader = new Loader
    this.camara = new Camara()
    new Luces(this)
    new Skybox(this)
    new Logo(this, loader)
    this.update(renderer)
  }

  private update(renderer) {
    renderer.render(this, this.camara)
    requestAnimationFrame(this.update.bind(this, renderer))
  }
}
