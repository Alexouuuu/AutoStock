import { useState } from "react"

import Header from "./components/Header"
import {voitures} from "./data/voitures"
import CarteVoiture from "./components/CarteVoiture"

function App() {
  const [recherche, setRecherche] = useState("");
  const voituresFiltrees = voitures.filter((voiture) => {
    const marqueCorrespond = voiture.marque.toLowerCase().includes(recherche.toLowerCase());
    const modeleCorrespond = voiture.modele.toLowerCase().includes(recherche.toLowerCase());
    return marqueCorrespond || modeleCorrespond;
  })

  return (
    <>
      <Header />
      <h1>AutoStock</h1>
      <p>Un site web sur lequel vous trouverez les véhicules mis en vente par l'entreprise AutoStock.</p>

      <input className="border border-black rounded-md text-gray-500 font-semibold pl-2" placeholder="Rechercher un Véhicule..." value={recherche} onChange={(e) => setRecherche(e.target.value)}></input>

      

      {voituresFiltrees.length === 0 ? (
        <p className="text-center font-bold my-8">Aucun véhicule ne correspond à votre recherche.</p>) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
            {voituresFiltrees.map((voiture) => (
              <CarteVoiture key={voiture.id} voiture={voiture} />))}
          </div>
        )}
    </>
  )
}

export default App
