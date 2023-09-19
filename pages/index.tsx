import { useEffect } from "react"

export default function Page() {

  useEffect(() => {
    console.log(window)
  }, [])
  
  return <h1>Te amo, Mi preciosa reyna de todas las preciosas por haber y por existir!</h1>
}