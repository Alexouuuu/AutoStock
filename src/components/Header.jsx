function Header() {
    return (
        <header className="flex justify-between items-center py-2 px-3 bg-gray-300 font-bold">
            <p>AutoStock</p>
            <nav>
                <ul className="flex items-center gap-8">
                    <li>Accueil</li>
                    <li>Véhicules</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;