import { GroupProvider } from "./Group";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User"

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            <HabitsProvider>
                <GroupProvider>
                    {children}
                </GroupProvider>
            </HabitsProvider>
        </UserProvider>
    )
};