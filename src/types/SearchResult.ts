export interface SearchResult {
  backdrop_path?: string | null
  id: number
  title: string
  name: string
  original_title?: string
  original_name?: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids?: number[]
  genres: Genres[]
  popularity: number
  first_air_date?: string
  release_date: string
  video?: boolean
  vote_average: number
  vote_count: number
}

interface Genres {
  id: number
  name: string
}

export interface CastType {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  department?: string
  job?: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
