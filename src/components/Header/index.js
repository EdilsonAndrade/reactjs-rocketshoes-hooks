import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingBasket } from 'react-icons/fa';
import logo from '../../assets/images/header.svg';
import { Container, Cart } from './styles';

export default function Header() {

  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>

        <FaShoppingBasket fontSize={36} color="#fff" />
      </Cart>
    </Container>
  );
}
