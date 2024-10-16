import Link from "next/link";

export default function Navbar() {
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="nav-buttons">
                    <ul>
                        <li><Link href="/create-component">+ Create</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
};
