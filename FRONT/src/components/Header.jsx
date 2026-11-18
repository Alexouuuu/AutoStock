function Header({onNaviguer, pageActive, utilisateurConnecte, onOuvrirAuth, onDeconnexion}) {
    return (
        <header className="border-b border-neutral-200 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span onClick={() => onNaviguer("catalogue")} className="font-mono text-lg font-bold tracking-widest uppercase">AUTOSTOCK</span>
            <nav>
                <ul className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    <li onClick={() => onNaviguer("catalogue")} className="hover:text-black transition-colors cursor-pointer">Accueil</li>
                    <li onClick={() => onNaviguer("catalogue")} className="hover:text-black transition-colors cursor-pointer">Véhicules</li>
                    <li onClick={() => onNaviguer("contact")} className="hover:text-black transition-colors cursor-pointer">Contact</li>
                </ul>
            </nav>

            <div className="flex items-center gap-4 border-l border-neutral-200 pl-8">
                {utilisateurConnecte ? (
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-slate-700">Bonjour, <strong className="text-slate-900">{utilisateurConnecte.prenom}</strong>
                        {utilisateurConnecte.role?.nom === "ROLE_ADMIN" && (<span className="ml-2 bg-indigo-100 text-indigo-700 px-2 pt-0.5 rounded text-[10px] font-bold">ADMIN</span>)}</span>
                        <button onClick={onDeconnexion} className="text-xs text-red-600 hover:text-red-800 font-semibold cursor-pointer underline">Déconnexion</button>
                    </div> ) : ( 
                        <button onClick={onOuvrirAuth} className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-slate-800 transition-colors cursor-pointer">Connexion</button>
                    )       
                }
            </div>
        </header>
    );
}

export default Header;