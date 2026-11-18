import { useState } from 'react';

function AuthModal({ isOpen, onFermer, onConnexionReussie }) {
    const [estConnexion, setEstConnexion] = useState(true);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        motDePasse:""
    });
    const [erreur, setErreur] = useState("");
    
    if (!isOpen) return null;

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value});};

    const handleSubmit = (e) => {
        e.preventDefault();
        setErreur("");
        
        const url = estConnexion ? "http://localhost:8080/api/auth/login" : "http://localhost:8080/api/auth/register";

        fetch(url, {
            method: "POST", //car on envoie les données 
            headers: {
                "Content-type" : "application/json" //on indique qu'on utilise du JSON
            },
            body: JSON.stringify(formData) //on transforme l'objet JavaScript en JSON
        }).then(async (response) => {
            if(!response.ok) { throw new Error("Identifiants incorrects ou email déjà utilisé.");} //si serveur renvoie erreur , on l'affiche
            return response.json(); //si tout va bien , on extrait le json
        }).then((utilisateur) => {
            onConnexionReussie(utilisateur); //props , previent le parent de l'utilsiateur connecté
            onFermer(); //ferme la modale
        }).catch((erreur) => {
            setErreur(erreur.message); //si ya une erreur , on met a jour le useState pour afficher le message en rouge
        })
    }
    
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-2 p-4">
            <div className="bg-white rounded-md max-w-md w-full p-6 relative">
                <button onClick={onFermer} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold">Fermer</button>
                <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">
                    {estConnexion ? "Connexion" : "Créer un compte"}
                </h2>
                { erreur && <p className="bg-red-50 text-red-600 p-2 rounded text-md mb-4">{erreur}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {!estConnexion && (
                        <>
                            <div>
                                <label className="text-xs font-semibold text-slate-700">Nom</label>
                                <input name="nom" value={formData.nom} onChange={handleChange} required className="w-full border rounded px-3 py-1.5 text-sm" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-700">Prenom</label>
                                <input name="nom" value={formData.prenom} onChange={handleChange} required className="w-full border rounded px-3 py-1.5 text-sm" />
                            </div>
                            
                        </>
                    )}

                    <div>
                        <label className="text-xs font-semibold text-slate-700">Email</label>
                        <input name="nom" value={formData.email} onChange={handleChange} required className="w-full border rounded px-3 py-1.5 text-sm" />
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-slate-700">Mot De Passe</label>
                        <input name="nom" value={formData.motDePasse} onChange={handleChange} required className="w-full border rounded px-3 py-1.5 text-sm" />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded-md font-semibold text-sm hover:bg-blue-700 mt-2">
                        {estConnexion ? "Se connecter" :  "S'inscrire"}
                    </button>
                </form>

                <p className="text-xs text-center text-slate-500 mt-4">
                    {estConnexion ? "Pas encore de compte ?" : "Déjà un compte ?"}
                    <button onClick={() => { setEstConnexion(!estConnexion); setErreur("");}} className="text-blue-600 fond-semibold underline">{estConnexion ? "Inscrivez-vous" : "Connectez-vous"}</button>
                </p>
            </div>
        </div>
     );
}

export default AuthModal;