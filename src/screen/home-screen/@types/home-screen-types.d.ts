interface IProductItem {
    id: string
    brand: string
    title: string
    category: string 
    description: string
    discountPercentage: number
    price: number
    rating: number
    stock: number
    thumbnail:string
}

interface IHomeScreenData {
    list: IProductItem[]
    fetchMoreData: () => void
}