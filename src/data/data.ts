export interface Artist {
    id: string;
    slug: string;
    name: string;
    imageUrl: string;
}

export const mockedArtists: Artist[] = [
    {
        id: '1',
        slug: 'lady-gaga',
        name: 'Lady Gaga',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
    },
    {
        id: '2',
        slug: 'the-weeknd',
        name: 'The Weeknd',
        imageUrl: 'https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae',
    },
    {
        id: '3',
        slug: 'miriam-bryant',
        name: 'Miriam Bryant',
        imageUrl: 'https://i.scdn.co/image/ab676161000051747994b16479f2784ee5511662',
    },
    {
        id: '4',
        slug: 'david-guetta',
        name: 'David Guetta',
        imageUrl: 'https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae',
    },
    {
        id: '5',
        slug: 'rihanna',
        name: 'Rihanna',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
    },
];

export interface Album {
    id: string;
    slug: string;
    title: string;
    imageUrl: string;
    artist: string;
}

export const mockedAlbums: Album[] = [
    {
        id: '1',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        artist: 'The Weeknd',
    },
    {
        id: '2',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        artist: 'The Weeknd',
    },
    {
        id: '3',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        artist: 'The Weeknd',
    },
    {
        id: '4',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',    
        artist: 'The Weeknd',
    },
    {
        id: '5',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        artist: 'The Weeknd',
    },
];

export interface Radio {
    id: string;
    slug: string;
    title: string;
    imageUrl: string;
    desc: string;
}

export const mockedRadios: Radio[] = [
    {
        id: '1',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        desc: 'With Central Cee, Drake and more',
    },
    {
        id: '2',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        desc: 'With Central Cee, Drake and more',
    },
    {
        id: '3',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        desc: 'With Central Cee, Drake and more',
    },
    {
        id: '4',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        desc: 'With Central Cee, Drake and more',
    },
    {
        id: '5',
        slug: 'chromatica',
        title: 'Chromatica',
        imageUrl: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6',
        desc: 'With Central Cee, Drake and more',
    },
];