import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/formater';
import * as CartActions from '../../store/modules/Cart/actions';

export default function Home() {
  const dispath = useDispatch();
  const [products, setProducts] = useState([]);

  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {}));

  useEffect(() => {
    async function getProducts(){
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      setProducts(data);
    }
    getProducts();
  }, [])

  const handleAddProductToCart = id => {
    dispath(CartActions.addToCartRequest(id))
  };



  return (
    <Container>
      {products.map(product => (
        <ul key={product.id}>
          <li>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button
              type="button"
              onClick={() => handleAddProductToCart(product.id)}
            >
              <div>
                <MdAddShoppingCart size={20} color="#FFF" />
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        </ul>
      ))}
    </Container>
  );
}

