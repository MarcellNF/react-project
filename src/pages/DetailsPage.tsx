import {useParams} from "react-router-dom";

export default function DetailsPage() {
    const params = useParams();
    const id = params.id;

    if(!id) {
        return (
            <h1>Keine ID übergeben</h1>
        );
    }

    return (
        <h1>Details: {id}</h1>
    );
}