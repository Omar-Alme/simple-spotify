import { mockedAlbums, mockedArtists, mockedRadios } from "../../data/data";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import RadioCard from "../components/RadioCard";

export default function ForYouPage() {
    return (
        <div>
            <section>
                <h2 className="text-2xl mb-2">Popular Artists</h2>
                <div className="flex gap-2">
                    {mockedArtists.map((artist) => (
                        <ArtistCard artist={artist} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-2">Album and Singles</h2>
                <div className="flex gap-2">
                    {mockedAlbums.map((album) => (
                        <AlbumCard album={album} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-2">Radio Stations</h2>
                <div className="flex gap-2">
                    {mockedRadios.map((radio) => (
                        <RadioCard radio={radio} />
                    ))}
                </div>
            </section>
        </div>
    );
}