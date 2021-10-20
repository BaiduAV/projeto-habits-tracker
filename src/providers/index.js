import { GroupProvider } from "./Group";
import { UserProvider } from "./User"

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            <GroupProvider>
                {children}
            </GroupProvider>
        </UserProvider>
    )
};