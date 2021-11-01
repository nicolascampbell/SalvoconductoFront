
export type FilmCard = {
  _id: string
  year: string
  place: string
  photoCover: number
}
export type Film = {
  _id: string,
  description: string,
  size: number,
  year: string,
  place: string,
  tags: Array<Object>,
  photoCover: number,
  photos:Array<Object>
}
export type Photo={
  title:string
  index: number
  _id: string
  film:number
  description: string
  relevance:number
}
export let empty_photo:{
  title:''
  index: -1
  _id: '-1'
  film:-1
  description: ''
  relevance:-1
}
