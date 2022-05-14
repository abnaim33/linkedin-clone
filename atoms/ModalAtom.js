import { atom } from 'recoil'



export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const modalType = atom({
    key: "modalTypeState",
    default: "dropIn"
})