export interface IMaster {
    id: number;
    name: string;
}

export interface ISlot {
    id: number;
    master_id: number;
    date: string;
    time: string;
}

export interface IBooking {
    user_id?: number;
    slot_id?: number;
}

export interface IFakeUser {
    id: number;
    role: "user" | "admin";
    first_name: string;
    last_name?: string;
    username?: string;
}

const masters: IMaster[] = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Алексей" },
];

const slots: ISlot[] = [
    { id: 1, master_id: 1, date: "2025-08-01", time: "10:00" },
    { id: 2, master_id: 2, date: "2025-08-01", time: "11:00" },
];

const bookings: IBooking[] = [];

const fakeUser: IFakeUser = {
    id: 12345,
    first_name: "Тестовый",
    username: "admin_username",
    role: "admin",
};

export const fakeApi = {
    getMasters: (): Promise<IMaster[]> => Promise.resolve([...masters]),

    addMaster: (name: string): Promise<IMaster> => {
        const newMaster: IMaster = { id: Date.now(), name };
        masters.push(newMaster);
        return Promise.resolve(newMaster);
    },

    getSlots: (master_id?: number): Promise<ISlot[]> => {
        const filtered = master_id
            ? slots.filter((s) => s.master_id === Number(master_id))
            : slots;
        return Promise.resolve([...filtered]);
    },

    addSlot: (slot: Omit<ISlot, "id">): Promise<ISlot> => {
        const newSlot: ISlot = { id: Date.now(), ...slot };
        slots.push(newSlot);
        return Promise.resolve(newSlot);
    },

    addBooking: (booking: IBooking): Promise<{ success: boolean }> => {
        bookings.push({ user_id: booking.user_id, slot_id: booking.slot_id });
        return Promise.resolve({ success: true });
    },

    getUser: (): Promise<IFakeUser> =>
        Promise.resolve({ ...fakeUser, role: "admin" }),
};
