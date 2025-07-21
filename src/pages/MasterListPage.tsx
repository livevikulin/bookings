import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    List,
    ListItem,
} from "@mui/material";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addMaster, fetchMasters } from "../store/master/slice";

const MasterList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const masters = useSelector((state: RootState) => state.masters);

    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(fetchMasters());
    }, [dispatch]);

    const handleAddMaster = () => {
        dispatch(addMaster(name)).then(() => dispatch(fetchMasters()));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Мастера
            </Typography>
            <Box display="flex" gap={2} mt={3} mb={3}>
                <TextField
                    label="Имя мастера"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleAddMaster}
                    disabled={!name}
                >
                    Добавить
                </Button>
            </Box>
            <List>
                {masters.map((m) => (
                    <ListItem key={m.id}>{m.name}</ListItem>
                ))}
            </List>
        </Container>
    );
};

export default MasterList;
