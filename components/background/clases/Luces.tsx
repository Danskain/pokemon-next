import { 
    DirectionalLight,
    HemisphereLight,
    AmbientLight
} from "three"


export default class Luces {
    constructor(scene) {
        scene.add(new AmbientLight('#E3E4E5', 1))
        scene.add(new HemisphereLight('#E3E4E5', 1))
        const sol = new DirectionalLight('#E3E4E5', 5)
        sol.position.set(20,20,5)
        scene.add(sol)
    }
}