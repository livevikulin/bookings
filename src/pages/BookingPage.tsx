import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    Box,
} from "@mui/material";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMasters } from "../store/master/slice";
import { addBooking } from "../store/booking/slice";
import { fetchSlots } from "../store/slot/slice";

const BookingPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector((state: RootState) => state.user.data);
    const masters = useSelector((state: RootState) => state.masters);
    const slots = useSelector((state: RootState) => state.slots);

    const [selectedMaster, setSelectedMaster] = useState<string>("");
    const [selectedSlot, setSelectedSlot] = useState<string>("");

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

    const handleBooking = () => {
        dispatch(
            addBooking({ user_id: user?.id, slot_id: Number(selectedSlot) })
        );
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Запись к мастеру
            </Typography>
            <Box mt={4}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="master-label">Мастер</InputLabel>
                    <Select
                        labelId="master-label"
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

                <FormControl
                    fullWidth
                    sx={{ mb: 3 }}
                    disabled={!selectedMaster}
                >
                    <InputLabel id="slot-label">Время</InputLabel>
                    <Select
                        labelId="slot-label"
                        value={selectedSlot}
                        label="Время"
                        onChange={(e) => setSelectedSlot(e.target.value)}
                    >
                        {slots.map((s) => (
                            <MenuItem key={s.id} value={s.id.toString()}>
                                {s.date} {s.time}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    fullWidth
                    disabled={!selectedSlot}
                    onClick={handleBooking}
                >
                    Записаться
                </Button>
            </Box>
        </Container>
    );
};

export default BookingPage;
