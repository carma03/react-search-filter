/**
 * @file ItemsList.jsx
 * 
 * Get the items in the props.
 */

const ItemsList = ({items}) => {
    return (
      <>
        {/* replace filteredProducts with items*/}
        {items.length === 0
          ? <p>No products found</p>
          : <ul>
            {
              items.map(
                item => <li key={item.id} data-id={item.id} data-category={item.category}>
                          {item.title}
                        </li>
              )
            }
          </ul>
        }
      </>
    )
  }
  
  export default ItemsList