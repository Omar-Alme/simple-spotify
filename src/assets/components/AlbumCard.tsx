import { Link } from "react-router";
import { Album } from "../../data/data";

interface Props {
    album: Album
}
export default function AlbumCard(props: Props) {
    return (
        <Link className="p-2 hover:bg-slate-800" to={`/albums/${props.album.slug}/${props.album.id}`}>
            <img className="rounded" src={props.album.imageUrl} alt="" />
            <h3>{props.album.title}</h3>
            <span className="text-sm text-slate-300">{props.album.artist}</span>
        </Link>
    );
}