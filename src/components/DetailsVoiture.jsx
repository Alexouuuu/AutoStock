

function DetailsVoiture({ voiture, onRetour}) {
    return ( 
        <>
        <div className="max-w-4xl mx-auto p-6 bg-gray-300">
            <button onClick={onRetour} className="mb-6 px-4 py-2 bg-red-500 hover:bg-red-400 rounded-md font-semibold transition-colors">Retour au Catalogue</button>
            <img src={voiture.image} className="w-full h-80 md:h-96 object-cover rounded-xl mb-6" />
            <h1 className="text-center text-2xl font-bold">{voiture.marque} {voiture.modele}</h1>
            <h2 className="text-xl text-green-500 fond-bold text-right pr-3">{voiture.prix + "€"}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <p className="bg-gray-100 p-4 rounded-xl text-center">Année :{voiture.annee}</p>
                <p className="bg-gray-100 p-4 rounded-xl text-center">Kilométrage :{voiture.kilometres} km</p>
                <p className="bg-gray-100 p-4 rounded-xl text-center">Carburant :{voiture.fuel}</p>
                <p className="bg-gray-100 p-4 rounded-xl text-center">Transmission :{voiture.transmission}</p>
                <p className="bg-gray-100 p-4 rounded-xl text-center">Puissance :{voiture.puissance} ch</p>
                <p className="bg-gray-100 p-4 rounded-xl text-center">Couleur :{voiture.couleur}</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{voiture.description}</p>
            <button className="bg-red-600 text-white text-center justify-center font-bold">Contacter le vendeur</button>
        </div>
        </> 
    );
}

export default DetailsVoiture;