import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MainLayout } from "../../layout/Layout";
import { useIsMobile } from "../../hooks/useIsMobile";

const Paw = styled(motion.span)`
  font-size: 2rem;
  display: inline-block;
  margin: 0 0.3rem;
`;

const easing: [number, number, number, number] = [0.42, 0, 0.58, 1];

const AnimatedPaws = () => (
  <Box mt={2}>
    {[0, 0.2, 0.4].map((delay, i) => (
      <Paw
        key={i}
        animate={{
          y: [0, -5, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.2,
            ease: easing,
            delay,
          },
        }}
      >
        🐾
      </Paw>
    ))}
  </Box>
);

export const Placeholder = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.MainButton.setText("Следить за запуском");
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        tg.sendData("user_clicked_waiting_button");
        tg.close();
      });
    }

    return () => window.Telegram?.WebApp?.MainButton.hide();
  }, []);

  return (
    <MainLayout>
      <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight={600} gutterBottom>Приложение в разработке</Typography>
      <Typography variant="body2">
        Лапки наших разработчиков трудятся, чтобы скорее его запустить
      </Typography>
      <AnimatedPaws />
    </MainLayout>
  );
};
