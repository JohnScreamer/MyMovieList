import { Cast } from "../Types/PersonType";

export const isMovie = (el: Cast) => {
    return el.media_type == "tv" ? `/tv/id/${el.id}` : `/movie/id/${el.id}`;
};
