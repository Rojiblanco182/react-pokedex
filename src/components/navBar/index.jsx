import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <h1><Link to={'/'} className="link">Pokedex</Link></h1>
    </>
  )
}