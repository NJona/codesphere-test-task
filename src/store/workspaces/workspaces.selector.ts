import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectWorkspacesReducer = (state: RootState) => state.workspaces;

/**
 * Select all workspaces from the store.
 * @returns {Workspace[]} All Workspaces as an arrray.
 */
export const selectWorkspaces = createSelector(
    [selectWorkspacesReducer],
    (workspaces) => workspaces.workspaces
);
