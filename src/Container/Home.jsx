import React, { useEffect, useState } from 'react'
import Tabelapi from '../Components/TabelapiComp/Tabelapi';
import AddproductComp from '../Components/AddproductComp/AddproductComp';
import ProductComp from '../Components/ProductComp/ProductComp';

const Home = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        await fetch('http://localhost:3004/products')
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((err) => {
            console.log(err)
        })
    }

    const onAdd = async (nama, harga, kode) =>{
        await fetch('http://localhost:3004/products', {
            method: 'POST',
            body: JSON.stringify({
                nama:nama,
                harga:harga,
                kode:kode,
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        .then((res) =>{
            if(res.status !== 201){
                return
            }else{
                return res.json();
            }
        })
        .then((data) => {
            setProducts((Products) => [...Products,data]);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onDelete = async (id) => {
        await fetch(`http://localhost:3004/products/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if(res.status !== 200){
                return
            }else{
                setProducts(Products.filter((Product) => {
                    return Product.id !== id;
                }))
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    
  return (
    <div>

        <br/>
        <AddproductComp onAdd={onAdd}/>
        
<table class="table">
<thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">nama</th>
      <th scope="col">harga</th>
      <th scope="col">kode</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        Products.map((Product) => (
            <ProductComp id={Product.id} nama={Product.nama} harga={Product.harga} kode={Product.kode} onDelete={onDelete}/>
        ))
    }
    </tbody>
</table>
</div>
  )
}

export default Home;

