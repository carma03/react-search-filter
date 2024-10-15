/**
 * @file App.js
 */

import { useState, useEffect } from 'react'
import Input from './components/Input.jsx'
import CategoryDropdown from './components/CategoryDropdown.jsx'
import ItemList from './components/ItemsList.jsx'
// import our new hook
import { useGetAllProducts } from './hooks/useGetAllProducts.jsx'

function App() {
  // use our custom hook to get our products and 
  // the error and loading variables
  const {products, loading, error} = useGetAllProducts()
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    // check if the products are not empty, if so then the 
    // API call was successful and we can update our 
    // filteredProducts state
    if (Object.keys(products).length > 0) {
      setFilteredProducts(products)
    }
  }, [products]) // this effect should run when the products state gets updated

  const filterSearchByTitleItems = (searchTerm) => { 
    // we now use 'products' instead of 'apiProducts' to do the filtering
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  }

  const filterByCategoryItems = (searchByCategory) => { 
    // we now use 'products' instead of 'apiProducts' to do the filtering

    if (searchByCategory == 'all') {
      setFilteredProducts(products);
      return;
    }

    const filteredItems = products.filter((product) =>
      product.category == searchByCategory
    );

    setFilteredProducts(filteredItems);
  }

  return (
    <>
      {/* Use the new Input component instead of the input tag */}
      <Input onChangeCallback={filterSearchByTitleItems} />
      <CategoryDropdown products={products} onChangeCallback={filterByCategoryItems} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the products</p>}
      {!loading && !error && <ItemList items={filteredProducts} />}
    </>
  )
}

export default App