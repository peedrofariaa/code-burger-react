import styles from 'styled-components'

export const Container = styles.div`
    background-color:black;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Img = styles.img`
    margin-top: 15px;
    margin-bottom: 25px;
`;

export const ContainerItens = styles.div`
    display: flex;
    flex-direction: column;
`;

export const H1 = styles.h1`
    color: white;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 50px;
    text-align: center;
`;

export const Button = styles.button`
    background: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 1);
    font-weight: 900;
    font-size: 17px;
    line-height: 2.5px;
    width: 324px;
    height: 68px;
    margin-top: 35px;
    margin-bottom: 25px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`;

export const OrderList = styles.li`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 101px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    margin-bottom: 20px;
    div{
        display:flex;
        flex-direction: column;
        gap: 30px;
    }
    button{
        background: transparent;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 28px;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.6;
    }
    .pName{
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
    }
    .pOrder{
        color: #FFF;
        font-size: 18px;
        font-weight: 300;
        line-height: 21px;
    }
`;