
import { Workspace } from "../../types/workspace.type";
import { createAction } from "../../utils/reducer/reducer.utils";
import { WORKSPACES_ACTION_TYPES } from "./workspaces.types";

/**
 * Set all workspaces in the WorkspacesState.
 * @param workspaces 
 * @returns 
 */
export const setWorkspaces = (workspaces: Workspace[]) =>
    createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, workspaces);

/**
 * Remove a workspace from the WorkspacesState.
 * @param workspaces 
 * @param workspaceToRemove 
 * @returns 
 */
export const removeWorkspace = (workspaces: Workspace[], workspaceToRemove: Workspace) => {
    const newWorkspaces = workspaces.filter((workspace) => workspace.id !== workspaceToRemove.id);
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};

/**
 * Add a workspace to the WorkspacesState.
 * @param workspaces 
 * @param workspaceToAdd 
 * @returns 
 */
export const addWorkspace = (workspaces: Workspace[], workspaceToAdd: Workspace) => {
    const newWorkspaces = [...workspaces, workspaceToAdd];
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};

/**
 * Change the properties of a workspace in the WorkspacesState.
 * @param workspaces 
 * @param workspaceToChange 
 * @returns 
 */
export const changeWorkspace = (workspaces: Workspace[], workspaceToChange: Workspace) => {
    const filteredWorkspaces = workspaces.filter((workspace) => workspace.id !== workspaceToChange.id);
    const newWorkspaces = [...filteredWorkspaces, workspaceToChange];
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};