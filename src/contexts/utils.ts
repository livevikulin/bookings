import { UserType } from "../contexts/AuthContext";

type TelegramInitData = {
    user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
    };
};

function isTelegramUser(obj: unknown): obj is TelegramInitData {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "user" in obj &&
        typeof (obj as TelegramInitData).user?.id === "number"
    );
}

export const getUserFromTelegram = (): UserType | null => {
    const initData = window.Telegram?.WebApp?.initDataUnsafe;

    if (isTelegramUser(initData) && initData.user) {
        return initData.user;
    }

    return null;
};
