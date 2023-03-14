import { Team } from "../../types/team.type";
import { createAction } from "../../utils/reducer/reducer.utils";
import { TEAM_ACTION_TYPES } from "./team.types";

export const setTeam = (team: Team) =>
    createAction<Team>(TEAM_ACTION_TYPES.SET_TEAM, team);
