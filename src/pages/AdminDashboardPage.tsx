import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AdminDashboard = () => {
    const user = useSelector((state: RootState) => state.user.data);
    const navigate = useNavigate();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Панель администратора
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Добро пожаловать, {user?.first_name}
            </Typography>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <Button
                    variant="contained"
                    onClick={() => navigate("/admin/slots")}
                >
                    Слоты
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate("/admin/masters")}
                >
                    Мастера
                </Button>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
