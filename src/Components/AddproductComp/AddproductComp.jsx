import React from 'react'
import './AddproductComp.css'

const AddproductComp = ({onAdd}) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.nama.value,e.target.harga.value,e.target.kode.value);
    e.target.nama.value = "";
    e.target.harga.value = "";
    e.target.kode.value = "";
}

  return (
    <div className='formadd'>
        <form onSubmit={handleOnSubmit}>
  <div class="form-group">
    <label for="exampleInputPassword1">nama</label>
    <input type="text" class="form-control" id="nama" name="nama"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Harga</label>
    <input type="text" class="form-control" id="Harga" name="harga" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Kode</label>
    <input type="text" class="form-control" id="Kode" name="kode"/>
  </div>
  <button type="submit" class="btn btn-primary" onSubmit={handleOnSubmit}>Add Data</button>
</form>
    </div>
  )
}

export default AddproductComp