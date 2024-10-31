"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Navbar() {
    const session = useSession();


    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1><Link href="/" id="link">Component-Cloud</Link></h1>
                </div>
                <div className="nav-buttons">
                    <ul>
                        {session.data?.user && <li><Link href="/create-component">+ Create</Link></li>}
                        {session.data?.user && <li><button onClick={() => signOut()}>Logout</button></li>}
                        {!session.data?.user && <li><button onClick={() => signIn("google")}>Login</button></li>}
                    </ul>
                </div>
            </div>
        </>
    )
};
