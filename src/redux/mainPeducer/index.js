import { createSlice } from "@reduxjs/toolkit";
import allApps from "../../NeRelog_apps.json"
import clients from "../../NeRelog_clients.json"

const mainReducer = createSlice({
    name: "main",
    initialState: {
        apps: allApps,
        clients: clients

    },
    reducers: {
        add(state) {
            state.apps = [...state.apps]
            // тут должна была быть логика с добавлением другого зип файла но сори его нет :D
        }
    }
})

export default mainReducer.reducer
export const { add } = mainReducer.actions