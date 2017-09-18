/**
 * Created by Lutz on 2017/9/15 0015.
 */
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  const { productsList } = products
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={productsList} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({ products }))(Products);
