import styles from 'styled-components'

export const Container = styles.div`
    background-color:black;
    height: 100vh;
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
    margin-bottom: 75px;
    text-align: center;
`;

export const Label = styles.label`
    color: rgba(238, 238, 238, 1);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.41px;
    margin-left: 20px;
`;

export const Input = styles.input`
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);
    border-radius: 15px;
    border: none;
    outline: none;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    width: 342px;
    height: 58px;
    padding-left: 20px;
    margin-bottom: 40px;
`;

export const Button = styles.button`
    background: rgba(217, 56, 86, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: 900;
    font-size: 17px;
    line-height: 2.5px;
    width: 324px;
    height: 68px;
    margin-top: 35px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`;