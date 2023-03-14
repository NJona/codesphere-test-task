import { Team } from "../../types/team.type";
import { Action } from "../../utils/reducer/reducer.utils";
import { TEAM_ACTION_TYPES } from "./team.types";

export type TeamState = {
    team?: Team;
}

export const TEAM_INITIAL_STATE: TeamState = {
    team: undefined,
};

export const teamReducer = (
    state = TEAM_INITIAL_STATE,
    action: Action<Team>
): TeamState => {
    const { type, payload } = action;

    switch (type) {
        case TEAM_ACTION_TYPES.SET_TEAM:
            return { ...state, team: payload };
        default:
            return state;
    }
};
