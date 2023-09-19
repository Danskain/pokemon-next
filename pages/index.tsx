import { useEffect } from "react"
import {
  Scene,
  WebGL1Renderer,
  PerspectiveCamera,
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  SphereGeometry,
  TextureLoader,
  BackSide,
  MeshPhongMaterial,
  DirectionalLight,
  HemisphereLight,
  AmbientLight,
} from "three"

export default function Page() {

  useEffect(() => {
    //console.log(window)
    const scene = new Scene()

    const renderer = new WebGL1Renderer({
      antialias: true,
      canvas: document.getElementById("bg")
    })

    const camara = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // mover camara
    camara.position.z = 6

    //crear la geometria

    const geometria = new  BoxGeometry(1, 1, 1)
    const material = new  MeshBasicMaterial({ color: 'red' })
    const cubo = new Mesh(geometria, material)

    //para que el cuvo se vea hay que agregarlo a la scena

    scene.add(cubo)

    //crear skybox
    const skyGeometry = new SphereGeometry(360, 25, 25)
    const loader = new TextureLoader()
    const textura = loader.load('/custom-sky.png')
    const materialTwo = new MeshPhongMaterial({
      map: textura
    }) 
    const skybox = new Mesh(skyGeometry, materialTwo)
    scene.add(skybox)
    skybox.material.side = BackSide
    
    //crear iluminasion
    scene.add(new AmbientLight(0xffffff, 0.8))
    scene.add(new HemisphereLight(0xffffff, 0.8))

    //tamaño del camvas
    renderer.setSize(window.innerWidth, window.innerHeight)

    const animate = () => {
      cubo.rotation.x += 0.01 
      cubo.rotation.y += 0.01 

      renderer.render(scene, camara)
      requestAnimationFrame(animate)
    }
    animate()
  }, [])
  
  return <canvas id="bg" />
}