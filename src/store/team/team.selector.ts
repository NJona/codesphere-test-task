import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectTeamReducer = (state: RootState) => state.team;

/**
 * Select the currently logged in team from the TeamState.
 * @returns {Team} The currently logged in team.
 */
export const selectTeam = createSelector(
    [selectTeamReducer],
    (team) => team.team
);
