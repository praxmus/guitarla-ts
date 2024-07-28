export type Guitar = {
    id : number
    name : string
    image : string
    description : string
    price : number
}

export type CartItem = Guitar & {
    quantity : number
}

export type GuitarID = Pick<Guitar,"id">
//export type GuitarID = Guitar["id"]