import { useState } from "react"

import Header from "./components/Header"
import {voitures} from "./data/voitures"
import CarteVoiture from "./components/CarteVoiture"
import DetailsVoiture from "./components/DetailsVoiture"

function App() {
  const [recherche, setRecherche] = useState("");
  const [carburant, setCarburant] = useState("Tous");
  const [tri, setTri] = useState("defaut");
  const [voitureSelectionnee, setVoitureSelectionnee] = useState(null);

  // filtre par nom ou modele
  const voituresFiltrees = voitures.filter((voiture) => {
    const marqueCorrespond = voiture.marque.toLowerCase().includes(recherche.toLowerCase());
    const modeleCorrespond = voiture.modele.toLowerCase().includes(recherche.toLowerCase());
    const carburantCorrespond = carburant === "Tous" || voiture.fuel === carburant;
    return (marqueCorrespond || modeleCorrespond ) && carburantCorrespond;
  }) 
  const voituresTriees = [...voituresFiltrees].sort((a,b) => {
    if (tri === "prix-croissant") return a.prix - b.prix;
    if (tri === "prix-decroissant") return b.prix - a.prix;
    if (tri === "km-croissant") return a.kilometres - b.kilometres;
    if (tri === "km-decroissant") return b.kilometres - a.kilometres;
    return 0;
  })

  return (
    <>
      <Header />

      {voitureSelectionnee ? (
        <DetailsVoiture voiture={voitureSelectionnee} onRetour={() => setVoitureSelectionnee(null)} /> ) : (
          <>
            <section className="border-b border-black pb-12 pt-16 px-6 max-w-7xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-widest text-black mb-3 underline underline-offset-4">SÉLECTION AUTOMOBILE</p>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6 pt-2">Véhicules D'éxception</h1>
              <p className="text-gray-700 max-w-xl text-sm md:text-base leading-relaxed">Le meilleur véhicule au meilleur prix. Véhicules inspectés et certifiés.</p>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-6 border-b border-black flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-800 underline underline-offset-4">
                {voituresTriees.length} Véhicule{voituresTriees.length > 1 ? "s" : ""} Disponibles
              </p>

              <div className="flex flex-col sm:flexèrow gap-3">
                <input className="border border-neutral-600 focus:outline-non focus:border-black px-4 py-1 text-xs font-mono uppercase tracking-wider bg-transparent placeholder:text-neutral-400" placeholder="Rechercher modèle..." value={recherche} onChange={(e) => setRecherche(e.target.value)} />
                <select value={carburant} onChange={(e) => setCarburant(e.target.value)} className="border border-neutral-600 focus:border-black focus:outline-none px-4 py-1 text-xs font-mono uppercase tracking-wider bg-transparent cursor-pointer">
                  <option value="Tous">Carburant : Tous</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Essence">Essence</option>
                  <option value="Hybride">Hybride</option>
                  <option value="Electrique">Électrique</option>
                </select>
                <select value={tri} onChange={(e) => setTri(e.target.value)} className="border border-neutral-600 focus:border-black focus:outline-none px-4 py-1 text-xs font-mono uppercase tracking-wider bg-transparent cursor-pointer">
                  <option value="defaut">Tri : Par défaut</option>
                  <option value="prix-croissant">Prix : Croissant</option>
                  <option value="prix-decroissant">Prix : Décroissant</option>
                  <option value="km-croissant">KM : Croissant</option>
                  <option value="km-decroissant">KM : Décroissant</option>
                </select>
              </div>
            </div>

            {voituresFiltrees.length === 0 ? (
              <p className="text-center font-bold my-8">Aucun véhicule ne correspond à votre recherche.</p>) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
                  {voituresTriees.map((voiture) => (
                    <CarteVoiture key={voiture.id} voiture={voiture} onSelectionner={() => setVoitureSelectionnee(voiture)}/>))}
                </div>
            )}
          </>
        )}
    </>
  )
}

export default App
