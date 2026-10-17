function Header() {
    return (
        <header className="border-b border-neutral-200 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono text-lg font-bold tracking-widest uppercase">AUTOSTOCK</span>
            <nav>
                <ul className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    <li className="hover:text-black transition-colors cursor-pointer">Accueil</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Véhicules</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;