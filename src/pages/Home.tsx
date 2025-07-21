import styled from "styled-components";
import { useAppDispatch } from "../hooks/useRedux";
import { setBooking } from "../features/bookingSlice";

const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

export const Home = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setBooking({ service: "Барбер", time: "15:00" }));
    window.Telegram.WebApp.sendData("Бронирование отправлено");
    window.Telegram.WebApp.close();
  };

  return (
    <Container>
      <h1>Запись на услугу</h1>
      <button onClick={handleClick}>Записаться на 15:00 к Барберу</button>
    </Container>
  );
};
