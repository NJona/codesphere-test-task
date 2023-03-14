import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectTeamReducer = (state: RootState) => state.team;

export const selectTeam = createSelector(
    [selectTeamReducer],
    (team) => team.team
);
