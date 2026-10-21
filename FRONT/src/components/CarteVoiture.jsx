function CarteVoiture({ voiture, onSelectionner }) {
  return (
    <article 
      onClick={onSelectionner}
      className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img 
          src={voiture.image} 
          alt={`${voiture.marque} ${voiture.modele}`} 
          className="w-full h-full object-cover" 
        />
        <span className="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-semibold px-2 py-0.5 rounded shadow-xs">
          {voiture.annee}
        </span>
        <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded">
          Garantie 12 mois
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900 leading-snug">
            {voiture.marque} <span className="font-normal text-slate-700">{voiture.modele}</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {voiture.puissance} ch · {voiture.couleur}
          </p>
        </div>

        <div className="border-t border-slate-100 pt-3 text-xs text-slate-600 flex items-center justify-between">
          <span className="font-medium text-slate-800">{voiture.kilometres.toLocaleString("fr-FR")} km</span>
          <span className="text-slate-300">•</span>
          <span>{voiture.fuel}</span>
          <span className="text-slate-300">•</span>
          <span>{voiture.transmission}</span>
        </div>

        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block">Prix total</span>
            <p className="text-xl font-bold text-slate-900">
              {voiture.prix.toLocaleString("fr-FR")} €
            </p>
          </div>
          <span className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors">
            Voir le véhicule →
          </span>
        </div>
      </div>
    </article>
  );
}

export default CarteVoiture;