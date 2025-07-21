import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboardPage";
import SlotEditor from "./pages/SlotEditorPage";
import MasterList from "./pages/MasterListPage";
import NotFound from "./pages/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/user/slice";
import { AppDispatch, RootState } from "./store";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.data);
    const role = user?.role;

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (!user) return <div>Загрузка...</div>;

    return (
        <>
            <CssBaseline />
            <Router>
                <Routes>
                    {role === "admin" && (
                        <>
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route
                                path="/admin/slots"
                                element={<SlotEditor />}
                            />
                            <Route
                                path="/admin/masters"
                                element={<MasterList />}
                            />
                        </>
                    )}
                    <Route path="/" element={<BookingPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
