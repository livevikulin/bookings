import { Box, Container } from "@mui/material";
import styled from "styled-components";
import { PropsWithChildren } from "react";

const Root = styled(Box)`
    min-height: 100vh;
    background: linear-gradient(to right, #f3f4f6, #e0e7ff);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled(Container)`
    max-width: 480px;
    padding: 1.5rem;
    text-align: center;
`;

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <Root>
            <Content>{children}</Content>
        </Root>
    );
};
