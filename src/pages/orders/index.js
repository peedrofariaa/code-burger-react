import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Bag from '../../assets/bag.png'
import Trash from '../../assets/lixeira.svg'

import { Container, Img, ContainerItens, H1, Button, OrderList } from './style'

function Orders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrder } = await axios.get('http://localhost:3001/orders');
            setOrders(newOrder);
        }
        fetchOrders()
    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/orders/${orderId}`)
        const newOrder = orders.filter(order => order.id !== orderId)

        setOrders(newOrder);
    }

    function goBackPage() {
        navigate('/')
    }

    return (
        <Container>
            <Img src={Bag} alt='order-logo' />
            <ContainerItens>
                <H1>Pedidos</H1>
                <ul>
                    {orders.map((order) => (
                        <OrderList key={order.id}>
                            <div>
                                <p className="pOrder">{order.order}</p>
                                <p className="pName">{order.clientName}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteOrder(order.id)}> <img src={Trash} alt="lata-de-lixo" /></button>
                            </div>
                        </OrderList>
                    ))}
                </ul>
                <Button onClick={goBackPage}>Voltar</Button>
            </ContainerItens>
        </Container>
    );
}

export default Orders;