import { useState, useEffect } from 'react'

import { Product } from '@/types/product'
import { getProducts } from '@/services/product'

export default () => {
    const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    (async () => {
      const { data , status } = await getProducts()
      if (status === 200) {
        setProducts(data)
      }
    })()
  }, [])

    return (
        <div>
            <h1>Product-Lists</h1>
            {/* <ul style={{ listStyle: 'none', padding: '0 20px' }}> */}
            <ol>
                {products.map((product) => (
                    <li
                    key={product.id}
                    style={{
                        padding: '0.5rem 0',
                        width: 350,
                        lineHeight: 1.2,
                        backgroundColor: 'hsl(240, 8%, 93%)',
                        userSelect: 'none',
                        border: '1px solid hsl(240, 8%, 70%)',
                        borderRadius: 2,
                        marginBottom: 7,
                        color: '#333'
                    }}
                    >
                {product.uuid}
                    </li>
                ))}
            </ol>
        </div>
    )
}