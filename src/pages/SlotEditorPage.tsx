import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Button,
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    List,
    ListItem,
} from "@mui/material";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addSlot, fetchSlots } from "../store/slot/slice";
import { fetchMasters } from "../store/master/slice";

const SlotEditor = () => {
    const dispatch = useDispatch<AppDispatch>();
    const masters = useSelector((state: RootState) => state.masters);
    const slots = useSelector((state: RootState) => state.slots);

    const [selectedMaster, setSelectedMaster] = useState<string>("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        dispatch(fetchMasters());
        dispatch(fetchSlots());
    }, [dispatch]);

    useEffect(() => {
        if (!selectedMaster) {
            return;
        }

        dispatch(fetchSlots(Number(selectedMaster)));
    }, [dispatch, selectedMaster]);

    const handleAddSlot = () => {
        dispatch(addSlot({ master_id: Number(selectedMaster), date, time }));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Управление слотами
            </Typography>
            <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <FormControl fullWidth>
                    <InputLabel id="master-select">Мастер</InputLabel>
                    <Select
                        labelId="master-select"
                        value={selectedMaster}
                        label="Мастер"
                        onChange={(e) => setSelectedMaster(e.target.value)}
                    >
                        {masters.map((m) => (
                            <MenuItem key={m.id} value={m.id.toString()}>
                                {m.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Дата"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    label="Время"
                    type="time"
                    InputLabelProps={{ shrink: true }}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleAddSlot}
                    disabled={!date || !time || !selectedMaster}
                >
                    Добавить слот
                </Button>
            </Box>
            <Typography variant="h6" mt={4}>
                Текущие слоты
            </Typography>
            <List>
                {slots.map((slot) => {
                    const master = masters.find((m) => m.id === slot.master_id);

                    return (
                        <ListItem key={slot.id}>
                            {slot.date} {slot.time} —{" "}
                            {master?.name || "Неизвестно"}
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};

export default SlotEditor;
