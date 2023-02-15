import { create } from 'zustand';

interface ScheduleObserveInterface {
    observe: boolean;
    toggleObserve: () => void;
}

const useStore = create<ScheduleObserveInterface>((set) => ({
    observe: false,
    toggleObserve: () => set((state) => ({ ...state, observe : !(state.observe) })),
}))

export default useStore;