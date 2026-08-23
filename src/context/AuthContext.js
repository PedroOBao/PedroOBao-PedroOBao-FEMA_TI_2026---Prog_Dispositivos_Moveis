import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [account, setAccount] = useState(null);

    function signIn(email, password) {
        const normalizedEmail = email.trim().toLowerCase();

        if (!account || account.email !== normalizedEmail || account.password !== password) {
            return { success: false, message: 'E-mail ou senha incorretos. Crie uma conta antes de entrar.' };
        }

        setUser({
            name: account.name,
            email: account.email,
        });
        return { success: true };
    }

    function signUp({ name, email, password }) {
        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();
        setAccount({ name: normalizedName, email: normalizedEmail, password });
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
