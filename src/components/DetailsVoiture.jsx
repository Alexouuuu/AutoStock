function DetailsVoiture({ voiture, onRetour}) {
    return ( 
        <>
        <div className="max-w-[80%] mx-auto p-6">
            <button onClick={onRetour} className="mb-6 px-5 py-2 hover:bg-gray-200 rounded-md font-semibold transition-colors border border-gray-200 cursor-pointer">← Retour au Catalogue</button>
            <div className="grid grid-cols-[55%_45%]">
                <div><img src={voiture.image} className="w-full h-80 md:h-100 object-cover rounded-xl" /></div>
                <div className="mx-2 h-130 flex flex-col p-6 gap-2">
                    <h1 className="text-left text-4xl font-bold">{voiture.marque} {voiture.modele}</h1>
                    <h2 className="text-left text-xl pb-2">{voiture.description}</h2>
                    <span className="text-left text-4xl text-green-800 font-semibold">{voiture.prix.toLocaleString() + " € "}</span>
                    <button className="bg-red-700 my-2 py-2 rounded-full text-white font-semibold hover:bg-red-600 cursor-pointer">Contacter le Vendeur</button>
                    <hr />
                    <div className="grid grid-cols-2 my-auto gap-3">
                        <div className="flex flex-col gap-3">
                            <p className="text-center py-4 bg-gray-300 rounded-md">Année : {voiture.annee}</p>
                            <p className="text-center py-4 bg-gray-300 rounded-md">Carburant : {voiture.fuel}</p>
                            <p className="text-center py-4 bg-gray-300 rounded-md">Puissance : {voiture.puissance}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-center py-4 bg-gray-300 rounded-md">Kilométrage : {voiture.kilometres + " KM "}</p>
                            <p className="text-center py-4 bg-gray-300 rounded-md">Transmission : {voiture.transmission}</p>
                            <p className="text-center py-4 bg-gray-300 rounded-md">Couleur : {voiture.couleur}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> 
    );
}

export default DetailsVoiture;