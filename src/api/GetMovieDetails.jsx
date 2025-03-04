export const getMovieDetails = async ({ params }) => {
    console.log(params);
    const id = params.movieID;


    try {
        const response = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=1c12799f`
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);

    }
};