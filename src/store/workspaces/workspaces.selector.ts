import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectWorkspacesReducer = (state: RootState) => state.workspaces;

export const selectWorkspaces = createSelector(
    [selectWorkspacesReducer],
    (workspaces) => workspaces.workspaces
);
