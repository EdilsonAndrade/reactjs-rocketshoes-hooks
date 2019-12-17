import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { Container, ProductTable } from './styles';
import * as CartActions from '../../store/modules/Cart/actions';
import { formatPrice } from '../../utils/formater';

export default function Cart() {

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })));

  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)));

  const dispatch = useDispatch();
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <span>{product.title}</span>
                <strong>{product.priceFormated}</strong>
              </td>
              <td>
                <div>
                  <MdRemoveCircleOutline onClick={() => decrement(product)} />
                  <input type="text" disabled value={product.amount} />
                  <MdAddCircleOutline onClick={() => increment(product)} />
                </div>{' '}
              </td>
              <td>
                <span>{product.subtotal}</span>
              </td>
              <td>
                <FaTrashAlt onClick={() => dispatch(CartActions.removeFromCart(product.id))} />
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <div>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </Container>
  );
}



