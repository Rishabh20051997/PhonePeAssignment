import { useEffect, useRef, useState } from "react"

const useHomeScreenController = (): IHomeScreenData => {
    const limit = 10
    const skipCount = useRef(0)
    const [list, updateList] = useState<IProductItem[]>([])

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipCount.current}`);
         const data = await response.json();
         updateList([...list, ...data.products])
         skipCount.current += data?.products?.length || 0
    }


    useEffect(() => {
        fetchData()
    }, [])

    const fetchMoreData = () => {
        fetchData()
    }
    
    return {
        list,
        fetchMoreData
    }
}

export default useHomeScreenController