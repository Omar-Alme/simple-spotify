import { useParams } from "react-router";
import { mockedAlbums } from "../../data/data";
export default function AlbumPage() {
    const params = useParams();
    const album = mockedAlbums.find((a) => a.id === params.id);

    if (!album) {
        return <h2>Album not found</h2>;
    }

    return (
        <div>
            <h2>{album.title}</h2>
            <img src={album.imageUrl}></img>
        </div>
        );
}