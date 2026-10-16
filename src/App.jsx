import Header from "./components/Header"
import {voitures} from "./data/voitures"
import CarteVoiture from "./components/CarteVoiture"

function App() {
  return (
    <>
      <Header />
      <h1>AutoStock</h1>
      <p>Un site web sur lequel vous trouverez les véhicules mis en vente par l'entreprise AutoStock.</p>

      <CarteVoiture voiture={voitures[0]} />
    </>
  )
}

export default App
