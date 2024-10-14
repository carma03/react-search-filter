/**
 * @file useGetAllProducts.jsx
 */

import { useState, useEffect } from 'react'

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { products, loading, error }
}