import { combineReducers } from "redux";
import { teamReducer, TeamState } from "./team/team.reducer";
import { workspacesReducer, WorkspacesState } from "./workspaces/workspaces.reducer";

export type RootState = {
  team: TeamState,
  workspaces: WorkspacesState,
}

export const rootReducer = combineReducers({
  team: teamReducer,
  workspaces: workspacesReducer,
});
