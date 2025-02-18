import { Link } from "react-router";

export default function ForYouPage() {
    return (
        <div>
            <section>
                <h2>Popular Artists</h2>
                <div className="flex gap-2">
                    <Link to="artist">Lady Gaga </Link>
                    <Link to="artist">The Weekend </Link>
                    <Link to="artist">Mariam Bryant </Link>
                    <Link to="artist">David Guetta </Link>
                    <Link to="artist">Rihanna </Link>

                </div>
            </section>
            <section>
                <h2>Album and Singles</h2>
                <div className="flex gap-2">
                    <Link to="album">Chromatica </Link>
                    <Link to="album">After Hours </Link>
                    <Link to="album">Blackout </Link>
                    <Link to="album">One Love </Link>
                    <Link to="album">Loud </Link>
                </div>
            </section>
            <section>
                <h2>Radio Stations</h2>
                <div className="flex gap-2">
                    <Link to="radio">Radio 1</Link>
                    <Link to="radio">Radio 2</Link>
                    <Link to="radio">Radio 3</Link>
                    <Link to="radio">Radio 4</Link>
                    <Link to="radio">Radio 5</Link>
                </div>
            </section>
        </div>
    );
}