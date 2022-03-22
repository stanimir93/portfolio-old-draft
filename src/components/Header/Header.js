import './header.css';

export default function Header() {
    return (
        <header>
            <span id='logo-text'>S.Nikolov</span>
            <nav>
                <ul>
                    <li>
                        <i className='bi bi-house'></i>
                        <span>Home</span>
                    </li>
                    <li>
                        <i class='bi bi-code-square'></i>
                        <span>Projects</span>
                    </li>
                    <li>
                        <i class='bi bi-file-person'></i>
                        <span>CV</span>
                    </li>
                    <li>
                        <i class='bi bi-envelope'></i>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
