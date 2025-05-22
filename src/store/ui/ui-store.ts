import { create } from "zustand";

interface State {
  disabledButton: boolean;
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setDisabledButton: (disabled: boolean) => void;
}

export const useUIStore = create<State>()((set) => ({
  disabledButton: true,
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  setDisabledButton: (disabled: boolean) => set({ disabledButton: disabled }),
}));
