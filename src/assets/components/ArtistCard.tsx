import { Link } from "react-router";

interface Props {
    title: string;
    image: string;
}
export default function ArtistCard(props: Props) {
    return (
        <Link className="p-2 hover:bg-slate-800" to="artist">
            <img className="rounded-full" src={props.image} alt="" />
            <h3>{props.title}</h3>
            <span className="text-sm text-slate-300">Artist</span>
        </Link>
    );
}