import { create } from 'zustand';

interface EmailStoreInterface {
    email: string;
    setEmail: (by:string) => void;
}

const useStore = create<EmailStoreInterface>((set) => ({
    email: '',
    setEmail: (email) => set((state) => ({ ...state, email})),
}))

export default useStore;