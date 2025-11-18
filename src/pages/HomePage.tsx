type HomePageProps = {
    incrementCounter: (value: number) => void;
}
export default function HomePage({incrementCounter}: HomePageProps) {
    return (
        <>
            <h1>Startseite</h1>
            <button onClick={() => incrementCounter(1)}>Counter++</button>
        </>
    );
}