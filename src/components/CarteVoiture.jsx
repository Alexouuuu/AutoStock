function CarteVoiture({ voiture, onSelectionner }) {
  return (
    <article onClick={onSelectionner} className="group border border-neutral-200 hover:border-black transition-all duration-200 bg-white flex flex-col justify-between cursor-pointer">
      <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
        <img src={voiture.image} alt={`${voiture.marque} ${voiture.modele}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-black text-white px-2 py-0.5 font-bold">
          {voiture.annee}
        </span>
        <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-wider bg-neutral-900/80 backdrop-blur-xs text-neutral-200 px-2 py-0.5">
          Garantie 12 mois
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-neutral-400 font-semibold mb-1">
            {voiture.marque}
          </p>
          <h2 className="text-xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {voiture.modele}
          </h2>
          <p className="text-xs text-neutral-500 mt-1 font-mono">
            {voiture.puissance} CH — {voiture.couleur}
          </p>
        </div>

        <div className="border-t border-neutral-100 pt-3 flex items-center justify-between font-mono text-xs text-neutral-700">
          <span>{voiture.kilometres.toLocaleString("fr-FR")} km</span>
          <span className="text-neutral-300">•</span>
          <span>{voiture.fuel}</span>
          <span className="text-neutral-300">•</span>
          <span>{voiture.transmission}</span>
        </div>

        <div className="border-t border-neutral-200 pt-3 flex items-baseline justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Prix comptant</span>
            <p className="text-2xl font-black tracking-tight text-neutral-950">
              {voiture.prix.toLocaleString("fr-FR")} €
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900 group-hover:translate-x-1 transition-transform">
            Voir l'offre 
          </span>
        </div>
      </div>
    </article>
  );
}

export default CarteVoiture;