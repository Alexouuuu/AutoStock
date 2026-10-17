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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {voitureSelectionnee ? (
        <DetailsVoiture voiture={voitureSelectionnee} onRetour={() => setVoitureSelectionnee(null)} /> ) : (
          <>
            <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Véhicules d'occasion certifiés</h1>
              <p className="text-slate-600 mt-2 text-sm md:text-base">Découvrez notre sélection de voitures révisées et garanties, prêtes à partir.</p>
            </section>

            <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
              <p className="text-xs text-slate-500 font-medium">
                <strong className="text-slate-900">{voituresTriees.length}</strong> véhicule{voituresTriees.length > 1 ? "s" : ""} disponible{voituresTriees.length > 1 ? "s" : ""}
              </p>
                    
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input 
                  className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
                  placeholder="Rechercher par modèle..." 
                  value={recherche} 
                  onChange={(e) => setRecherche(e.target.value)} 
                />
                <select 
                  value={carburant} 
                  onChange={(e) => setCarburant(e.target.value)} 
                  className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                >
                  <option value="Tous">Tous les carburants</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Essence">Essence</option>
                  <option value="Hybride">Hybride</option>
                  <option value="Electrique">Électrique</option>
                </select>
                <select 
                  value={tri} 
                  onChange={(e) => setTri(e.target.value)} 
                  className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                >
                  <option value="defaut">Tri recommandé</option>
                  <option value="prix-croissant">Prix croissant</option>
                  <option value="prix-decroissant">Prix décroissant</option>
                  <option value="km-croissant">Kilométrage croissant</option>
                  <option value="km-decroissant">Kilométrage décroissant</option>
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
    </div>
  )
}

export default App
