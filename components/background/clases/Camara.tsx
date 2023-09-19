import { PerspectiveCamera } from "three";

export default class Camara extends PerspectiveCamera{
  constructor() {
    super(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // mover camara
    this.position.z = 6
  }
}
