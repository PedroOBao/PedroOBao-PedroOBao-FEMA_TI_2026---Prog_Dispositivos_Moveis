import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

function formatNameFromEmail(email) {
    const username = email.split('@')[0].replace(/[._-]+/g, ' ').trim();
    return username
        .split(' ')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') || 'Atleta';
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signIn(email) {
        const normalizedEmail = email.trim().toLowerCase();
        setUser({
            name: formatNameFromEmail(normalizedEmail),
            email: normalizedEmail,
        });
    }

    function signUp({ name, email }) {
        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();
        setUser({ name: normalizedName, email: normalizedEmail });
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }

    return context;
}
