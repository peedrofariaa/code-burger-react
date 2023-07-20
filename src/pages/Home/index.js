import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Burger from '../../assets/burger.png';

import { Container, Img, ContainerItens, H1, Label, Input, Button } from "./style";

function App() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post('http://localhost:3001/orders', {
      order: inputOrder.current.value,
      clientName: inputName.current.value
    });
    setOrders([...orders, newOrder]);

    navigate('/orders');
  }

  return (
    <Container>
      <Img src={Burger} alt='burger-logo' />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <Label>Pedido</Label>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada" ></Input>

        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder="Steve Jobs" ></Input>
        
        <Button onClick={addNewOrder} >Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;