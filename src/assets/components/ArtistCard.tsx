import { Link } from "react-router";
import { Artist } from "../../data/data";

interface Props {
    artist: Artist
}
export default function ArtistCard(props: Props) {
    return (
        <Link className="p-2 hover:bg-slate-800" to={`/artists/${props.artist.slug}/${props.artist.id}`}>
            <img className="rounded-full" src={props.artist.imageUrl} alt="" />
            <h3>{props.artist.name}</h3>
            <span className="text-sm text-slate-300">Artist</span>
        </Link>
    );
}