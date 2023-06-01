import { Movie } from "./movie.model";

export interface MoviesPaginated {
    content: Movie[]
    totalElements: number
    totalPages: number
}