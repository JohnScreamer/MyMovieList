import axios from "axios";

export const DiscoverMovieRequest = async (url: string, param: any) => {
    let error = false;
    const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie/`,
        {
            params: param,
        }
    );
    console.log(response.status);

    if (response.status > 299 || response.status < 200) {
        error = true;
    }
    return [response?.data, error];
};
