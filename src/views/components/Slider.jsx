import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Description = styled.p`
  margin: 50px 0px;

  font-size: 20px;

  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get("/home").then((res) => {
        setImage(res.data);
      });
    };
    getData();
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {image.map((item) => (
          <Slide key={item.ProductID}>
            <ImgContainer>
              <Image src={item.url} />
            </ImgContainer>

            <InfoContainer>
              <Description>CHƯƠNG TRÌNH HÈ NĂNG ĐỘNG GIẢM GIÁ 10%</Description>
              <Button>XEM NGAY</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
