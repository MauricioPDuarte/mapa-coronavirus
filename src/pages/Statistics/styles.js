import styled from 'styled-components';


export const Details = styled.div`
   
    margin: -30px auto 0 auto;
   
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    opacity: 0.90;
    display: flex;
    align-items: center;

    @media(max-width: 600px) {
        margin: 0 auto;
        flex-direction: column;
        border-radius: 0;
        align-items: flex-start;
  }
   
`;

export const DetailCountry = styled.div`
    border-right: 1px solid #d3d3d3;
    padding: 0 25px 0 0;
    color: #333;

    h1 {
        margin-bottom: -15px;
        font-size: 20px;
    }

    span {
        font-weight: 300;
        font-size : 10px;
    }

    @media(max-width: 600px) {
        border: 0;

        h1 {
            font-size: 26px;
        }

        span {
            font-size: 16px;
        }
  }
`;

export const ListItems = styled.div`
    display: grid;
    grid-gap: 30px;
    padding: 10px;
    justify-content: center;
    align-items :center;
    margin: 0 auto;
    
    grid-template-columns: repeat(5, 1fr);
    

    @media(max-width: 600px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 35px;
        margin-top: 20px;
        padding: 0;
        margin: 20px 0 0 0;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    p {
        font-size: 16px;
        margin: 0;
        padding: 0;
        color: rgba(251, 48, 82, 1);
        font-weight: 600;
    }

    span {
        font-weight: 300;
        font-size: 16px;
        margin-top: -7px;
        color: #666;
    }

    @media(max-width: 600px) {
        p {
            font-size: 20px;
        }
  }
`;

export const Container = styled.div`
    width: 50%;
    border: 1px solid #d3d3d3;
    padding: 10px;
    margin: 10px auto;


    @media(max-width: 800px) {
        width: 90%;

  }
`;

export const Tip = styled.div`
    background: #fbba00;
    color: #212529;
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    width: 240px;
    padding: 2px 7px;
    display: flex;
    align-items: center;

    svg {
        margin: 0 5px 0 0;
    }
`;

export const Controls = styled.div`
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    position: fixed;
    top: 60px;

    svg {
        font-size: 12px;
        color: #666;
        cursor: pointer;
        
        &:first-child {
            margin-bottom: 15px;
        }
    }
`;