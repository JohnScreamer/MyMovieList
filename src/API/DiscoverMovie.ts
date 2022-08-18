import axios from "axios";

export const DiscoverMovieRequest = async (url: string, param: any) => {
    let error = false;
    const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?" +
            new URLSearchParams(param)
    );

    if (response.status > 299 || response.status < 200) {
        error = true;
    }
    const data = await response.json();

    return [data, error];
};
