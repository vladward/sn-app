import {v1} from "uuid";

const initialState = {
    users: [
        {id: v1(), fullName: "Vladislav", status: "Working...", location: "Minsk", country: "Belarus"},
        {id: v1(), fullName: "Andrei", status: "Working...", location: "Minsk", country: "Belarus"},
        {id: v1(), fullName: "Kate", status: "Working...", location: "Minsk", country: "Belarus"}
    ]
}

export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}