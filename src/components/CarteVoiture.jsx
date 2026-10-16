function CarteVoiture({ voiture , onSelectionner }) {
    return ( 
        <>
            <div className="bg-gray-100 rounded-xs overflow-hidden hover:bg-gray-200 transition-colors">
                <img src={voiture.image} className="object-cover h-40 w-full" />
                <h1 className="text-xl font-bold">{voiture.marque + " " + voiture.modele}</h1>
                <ul className="px-2 text-xs">
                    <li>{voiture.annee}</li>
                    <li>{voiture.kilometres}</li>
                    <li>{voiture.fuel}</li>
                    <li>{voiture.puissance}</li>
                </ul>
                <h3 className="text-green-500 font-bold text-xl">{voiture.prix + "€"}</h3>
                <button className="text-white font-bold bg-blue-500 rounded-lg p-1" onClick={onSelectionner}>En savoir plus</button>
            </div>    
        </>
    );
}

export default CarteVoiture;