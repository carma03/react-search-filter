/**
 * @file ItemsList.jsx
 * 
 * Get the items in the props.
 */

const ItemsList = ({items}) => {
    return (
      <>
        {/* replace filteredUsers with items*/}
        {items.length === 0
          ? <p>No users found</p>
          : <ul>
            {items.map(item => <li key={item.id}>{item.firstName}</li>)}
          </ul>
        }
      </>
    )
  }
  
  export default ItemsList