function Footer({onNaviguer , pageActive}) {
    return ( 
    <>
        <footer className="bg-gray-200">
            <div className="text-center"><span className="font-mono text-lg font-bold tracking-widest uppercase pb-2 text-center underline underline-offset-4">AUTOSTOCK</span></div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[50%] mx-auto"> 
                <ul className="flex flex-col pl-4 pb-4">    
                    <li onClick={() => onNaviguer("catalogue")} className="hover:text-black cursor-pointer hover:underline">Accueil</li>
                    <li onClick={() => onNaviguer("catalogue")} className="hover:text-black cursor-pointer hover:underline">Véhicules</li>
                    <li onClick={() => onNaviguer("contact")} className="hover:text-black cursor-pointer hover:underline">Contact</li>
                </ul>
                <div className="md:col-start-3 text-right pb-4 pr-4">
                    <p>23 Rue de Paris</p>
                    <p>01 01 01 01 01</p>
                    <p>8h-18h du Lundi au Vendredi</p>
                </div>
            </div>
            <div className="text-center"><span className="text-md font-semibold">&copy; 2026 AutoStock - Tous droits réservés</span></div>
        </footer>
    </> 
    );
}

export default Footer;