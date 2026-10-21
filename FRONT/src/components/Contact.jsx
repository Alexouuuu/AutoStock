import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        nomPrenom: "",
        email: "",
        telephone: "",
        motif: "Demande d'informations",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((donnees) => {
            alert("Votre message a bien été enregistré");
            setFormData({
                nomPrenom: "",
                email: "",
                telephone: "",
                motif: "Demande d'informations",
                message:"",
            });
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi :", error);
            alert("Erreur lors de l'envoi du message.");
        });
    };

    return ( 
    <>
    <h1 className="text-3xl text-center font-bold py-10">Besoin d'aide ?</h1>
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Nom & Prénom</label>
                    <input className="border rounded-sm py-1 px-2" name="nomPrenom" value={formData.nomPrenom} onChange={handleChange} placeholder="Nom Prénom"></input>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email</label>
                    <input className="border rounded-sm py-1 px-2" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Telephone</label>
                    <input className="border rounded-sm py-1 px-2" placeholder="Telephone" type="tel" name="telephone" value={formData.telephone} onChange={handleChange}></input>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Motif</label>
                    <select className="border rounded-sm py-1 px-2" name="motif" value={formData.motif} onChange={handleChange}>
                        <option>Demande d'informations</option>
                        <option>Demande d'essai</option>
                        <option>Estimation de Reprise</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700" >Votre Message</label>
                    <textarea className="border rounded-sm py-1 px-2" rows="4" placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button className="rounded-full text-white bg-blue-400 py-2 px-2 font-semibold cursor-pointer hover:bg-blue-500" type="submit">Envoyer</button>
            </form>
            <div className="flex flex-col gap-2">
                <p><span className="underline underline-offset-4">Adresse :</span> 23 rue de Paris</p>
                <p><span className="underline underline-offset-4">Horaires :</span> 8h-19h du Lundi au Samedi</p>
                <p className="mt-5">Notre équipe est là pour vous accueillir et est entièrement à votre disposition</p>
                <iframe title="Localisation du garage" src="https://maps.google.com/maps?q=23+Rue+de+Paris,+75000+Paris&t=&z=14&ie=UTF8&iwloc=&output=embed" className="w-full h-80 border border-slate-300 rounded-md mt-4" loading="lazy"></iframe>
            </div>
        </div>
    </div> 
    </>
    );
}

export default Contact;