import Header from "./components/Header"
import {voitures} from "./data/voitures"
import CarteVoiture from "./components/CarteVoiture"

function App() {
  return (
    <>
      <Header />
      <h1>AutoStock</h1>
      <p>Un site web sur lequel vous trouverez les véhicules mis en vente par l'entreprise AutoStock.</p>

      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {voitures.map((voiture) => (
        <CarteVoiture key={voiture.id} voiture={voiture} />))}
      </div>
    </>
  )
}

export default App
