import './Row.scss'


export const Row = (props) => {
    const { productos, isProductEdit } = props;
  
    return (
      <>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <th scope="row">{producto.name}</th>
            <td>{producto.color}</td>
            <td>{producto.category}</td>
            <td>{producto.price}</td>
            <td>
              <a onClick={()=>isProductEdit(producto)}>Edit</a> | <a>Delete</a>
            </td>
          </tr>
        ))}
      </>
    );
  };
  
  
  
  export default Row