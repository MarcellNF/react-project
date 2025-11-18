import Navbar from "./Navbar.tsx";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    );
}