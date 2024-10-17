import * as v from "valibot"
export const Movie = v.pipe(
    v.object({
        title: v.optional(v.string()),
        original_title: v.optional(v.string()),
        name: v.optional(v.string()),
        original_name: v.optional(v.string()),
        media_type: v.optional(v.string()),
        backdrop_path: v.nullable(v.string()),
        genre_ids: v.array(v.number()),
        id: v.number(),
        original_language: v.string(),
        overview: v.string(),
        popularity: v.number(),
        poster_path: v.string(),
        vote_average: v.number(),
        vote_count: v.number(),
    }),
    v.transform((o) => ({
        name: o.title ? o.title : o.name,
        backdropPath: o.backdrop_path,
        genreIds: o.genre_ids,
        id: o.id,
        originalLanguage: o.original_language,
        originalName: o.original_title ? o.original_title : o.original_name,
        overview: o.overview,
        popularity: o.popularity,
        posterPath: o.poster_path,
        voteAverage: o.vote_average,
        voteCount: o.vote_count
    }))
);
export const Movies = v.array(Movie);
export const MovieResults = v.object({
    netflixOriginals: Movies,
    trendingNow: Movies,
    topRated: Movies,
    actionMovies: Movies,
    comedyMovies: Movies,
    horrorMovies: Movies,
    romanceMovies: Movies,
    documentaries: Movies,
})
export type Movies = v.InferOutput<typeof Movies>;
export type MovieResults = v.InferOutput<typeof MovieResults>
export type Movie = v.InferOutput<typeof Movie>;