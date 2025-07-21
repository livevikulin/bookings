import styled from "styled-components";
import { Placeholder } from "../components/Placeholder/Placeholder";

const Container = styled.div`
    height: 100%;
    padding: 0;
    margin: 0;
`;

export const Home = () => {
    return (
        <Container>
            <Placeholder />
        </Container>
    );
};
