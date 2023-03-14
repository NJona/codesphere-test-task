import { Workspace } from "../../types/workspace.type";
import { Action } from "../../utils/reducer/reducer.utils";
import { WORKSPACES_ACTION_TYPES } from "./workspaces.types";

export type WorkspacesState = {
    workspaces?: Workspace[];
}

export const WORKSPACES_INITIAL_STATE: WorkspacesState = {
    workspaces: undefined,
};

export const workspacesReducer = (
    state = WORKSPACES_INITIAL_STATE,
    action: Action<Workspace[]>
): WorkspacesState => {
    const { type, payload } = action;

    switch (type) {
        case WORKSPACES_ACTION_TYPES.SET_WORKSPACES:
            return { ...state, workspaces: payload };
        default:
            return state;
    }
};
