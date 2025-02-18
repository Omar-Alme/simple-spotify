import { Link } from "react-router";
import { Radio } from "../../data/data";

interface Props {
    radio: Radio;
}
export default function AlbumCard(props: Props) {
    return (
        <Link className="p-2 hover:bg-slate-800" to={`/radios/${props.radio.slug}/${props.radio.id}`}>
            <img className="rounded" src={props.radio.imageUrl} alt="" />
            <h3>{props.radio.title}</h3>
            <span className="text-sm text-slate-300">{props.radio.desc}</span>
        </Link>
    );
}