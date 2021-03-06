import {initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: initialPeopleType, action: any): any => {

    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return  state.map((e: any) => e).sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
            }
            if (action.payload === "down") {
                return state.map((e: any) => e).sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    }
                    if (a.name > b.name) {
                        return -1
                    }
                    return 0
                })
            }

            return state
        }
        case "check": {

            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
};