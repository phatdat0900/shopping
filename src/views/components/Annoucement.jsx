import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 500;
`;

const Annoucement = () => {
    return (
        <Container>
            Sale 20% !! Freeship nội thành khi Order trên 800.000d
        </Container>
    );
};

export default Annoucement;
