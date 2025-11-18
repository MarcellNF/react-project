import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import Layout from "./components/Layout.tsx";
import {useState} from "react";

export default function App() {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = (value: number) => {
        setCounter(counter + value);
    }

    return (
        <Layout>
            {counter}
            <Routes>
                <Route path="/" element={<HomePage incrementCounter={incrementCounter}/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/details/:id" element={<DetailsPage/>}/>
            </Routes>
        </Layout>
    )
}
