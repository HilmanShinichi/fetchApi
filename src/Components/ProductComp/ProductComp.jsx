import React from 'react'
import TheadComp from '../TheadComp/TheadComp';

const ProductComp = ({id, nama, harga, kode, onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }
  return (
    <>
 
 
 
    <tr key={id}>
        <td>{id}</td>
        <td>{nama}</td>
        <td>{harga}</td>
        <td>{kode}</td>
        <td><button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button type="button" class="btn btn-secondary ml-2">Edit</button></td>
    </tr>
  
    </>
    
  )
}

export default ProductComp;
