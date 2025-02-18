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
                        <ArtistCard key={artist.id} title={artist.name} image={artist.imageUrl} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-2">Album and Singles</h2>
                <div className="flex gap-2">
                    {mockedAlbums.map((album) => (
                        <AlbumCard key={album.id} title={album.title} image={album.imageUrl} artist={album.artist} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-2">Radio Stations</h2>
                <div className="flex gap-2">
                    {mockedRadios.map((radio) => (
                        <RadioCard key={radio.id} title={radio.title} image={radio.imageUrl} desc={radio.desc} />
                    ))}
                </div>
            </section>
        </div>
    );
}