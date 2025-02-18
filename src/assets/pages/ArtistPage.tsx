import { useParams } from "react-router";
import { mockedArtists } from "../../data/data";
export default function ArtistPage() {
    const params = useParams();
    const artist = mockedArtists.find((a) => a.id === params.id);

    if (!artist) {
        return <h2>Artist not found</h2>;
    }

    return (
        <div>
            <h2>{artist.name}</h2>
            <img src={artist.imageUrl}></img>
        </div>
        );
}