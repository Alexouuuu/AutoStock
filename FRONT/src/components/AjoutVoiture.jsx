import { useState } from "react";

export default function AjoutVoiture({onVoitureAjoutee}) {
    const [form, setForm] = useState({
        marque: "",
        modele: "",
        annee:"",
        prix: "",
        kilometres: "",
        fuel: "Diesel",
        transmission: "Manuelle",
        puissance:"",
        couleur:"",
        image:"",
        description:"",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //convertit les champs en entiers pour pas mettre des String dans la bdd
        const payload = {...form,
            annee: Number(form.annee),
            prix: Number(form.prix),
            kilometres: Number(form.kilometres),
            puissance: Number(form.puissance),
        };

        fetch("http://localhost:8080/api/voitures", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then((response) => response.json())
        .then((saved) => { alert("Voiture Ajoutée !");
            setForm({
                marque:"",
                modele:"",
                annee:"",
                prix:"",
                kilometres:"",
                fuel:"Diesel",
                transmission:"Manuelle",
                puissance:"",
                couleur:"",
                image:"",
                description:""
            });
            onVoitureAjoutee(saved);
        }).catch((error) => {
            console.error(error);
            alert("Erreur lors de l'ajout");
        });
    };

    return (
        <section className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Ajouter une voiture</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Marque</label>
                    <input name="marque" value={form.marque} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Modele</label>
                    <input name="modele" value={form.modele} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Annee</label>
                    <input name="annee" value={form.annee} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Prix (€)</label>
                    <input name="prix" value={form.prix} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Kilométrage</label>
                    <input name="kilometres" value={form.kilometres} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Puissance (ch)</label>
                    <input name="puissance" value={form.puissance} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Carburant</label>
                    <select name="fuel" value={form.fuel} onChange={handleChange} className="w-full border rounded p-2">
                        <option>Diesel</option>
                        <option>Essence</option>
                        <option>Hybride</option>
                        <option>Electrique</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Transmission</label>
                    <select name="transmission" value={form.transmission} onChange={handleChange} className="w-full border rounded p-2">
                        <option>Manuelle</option>
                        <option>Automatique</option>
                        <option>Semi-Automatique</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Couleur</label>
                    <input name="couleur" value={form.couleur} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Image (URL)</label>
                    <input name="image" value={form.image} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea name="description" rows="3" value={form.description} onChange={handleChange} className="w-full border rounded p-2" required />
                </div>
                <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Ajouter la Voiture</button>
            </form>
        </section>

    )
}