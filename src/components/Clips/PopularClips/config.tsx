interface Props {
    browseClips: Games,
};

interface Games {
    ApexLegends:  Array<Clip>,
    CODWarzone:  Array<Clip>,
    LeagueOfLegends:  Array<Clip>,
    Valorant:  Array<Clip>,
    Fortnite:  Array<Clip>
};

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string
};

export {
    Props,
    Clip
};