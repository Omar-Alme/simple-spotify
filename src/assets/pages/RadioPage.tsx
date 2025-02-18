import { useParams } from "react-router";
import { mockedRadios } from "../../data/data";
export default function RadioPage() {
    const params = useParams();
    const radio = mockedRadios.find((a) => a.id === params.id);

    if (!radio) {
        return <h2>Radio not found</h2>;
    }

    return (
        <div>
            <h2>{radio.title}</h2>
            <span>{radio.desc}</span>
            <img src={radio.imageUrl}></img>
        </div>
        );
}