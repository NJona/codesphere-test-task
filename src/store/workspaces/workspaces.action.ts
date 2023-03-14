
import { Workspace } from "../../types/workspace.type";
import { createAction } from "../../utils/reducer/reducer.utils";
import { WORKSPACES_ACTION_TYPES } from "./workspaces.types";

export const setWorkspaces = (workspaces: Workspace[]) =>
    createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, workspaces);

export const removeWorkspace = (workspaces: Workspace[], workspaceToRemove: Workspace) => {
    const newWorkspaces = workspaces.filter((workspace) => workspace.id !== workspaceToRemove.id);
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};

export const addWorkspace = (workspaces: Workspace[], workspaceToAdd: Workspace) => {
    const newWorkspaces = [...workspaces, workspaceToAdd];
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};

export const changeWorkspace = (workspaces: Workspace[], workspaceToChange: Workspace) => {
    const filteredWorkspaces = workspaces.filter((workspace) => workspace.id !== workspaceToChange.id);
    const newWorkspaces = [...filteredWorkspaces, workspaceToChange];
    return createAction<Workspace[]>(WORKSPACES_ACTION_TYPES.SET_WORKSPACES, newWorkspaces);
};