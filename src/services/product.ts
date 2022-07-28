import AXIOS from '@/services/axios'
import { Product } from '@/types/product'

export function getProducts() {
    return AXIOS.get<Array<Product>>('/v1/api/product');
}