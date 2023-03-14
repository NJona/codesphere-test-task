import { Team } from "../../types/team.type";
import { createAction } from "../../utils/reducer/reducer.utils";
import { TEAM_ACTION_TYPES } from "./team.types";

/**
 * Set the team at the TeamState.
 * @param team 
 * @returns 
 */
export const setTeam = (team: Team) =>
    createAction<Team>(TEAM_ACTION_TYPES.SET_TEAM, team);
