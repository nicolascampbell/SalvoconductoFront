export type FilmCard = {
    _id: string
    year: string
    place: string
    photoCover: number
}
export type Photo = {
    title: string
    index: number
    _id: string
    film: number
    description: string
    relevance: number
}
export type Film = {
    _id: string
    description: string
    size: number
    year: string
    place: string
    tags: Array<unknown>
    photoCover: number
    photos: Array<Photo>
}

export let emptyPhoto: {
    title: ''
    index: -1
    _id: '-1'
    film: -1
    description: ''
    relevance: -1
}
