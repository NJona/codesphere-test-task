import { config } from "../config";
import { Workspace } from "../types/workspace.type";

/**
 * Because i had CORS Problems using the given API Url, i created a Proxy Server which allows CORS Requests.
 * Can be changed in the config by setting @useAPIProxy to false.
 */
export const API_BASE_URI = config.useAPIProxy ? config.apiBaseUriProxy : config.apiBaseUri;

/**
 * List all workspaces for requested teamId.
 * @param teamId The teamId of the current logged in Team.
 * @returns {Promise<Workspace[]>}
 */
export async function listWorkspaces(teamId: number): Promise<Workspace[]> {
    const body = JSON.stringify({
        teamId: teamId
    });
    const listRes = await fetch(`${API_BASE_URI}/listWorkspaces`,
        {
            method: "POST",
            headers: {
                'accept': 'application/json',
                "content-type": "application/json",
            },
            body: body
        }
    );
    console.log(listRes);
    if (!listRes.ok) {
        throw new Error(listRes.statusText);
    }

    const data = await listRes.json();
    return data;
}

/**
 * Delete a workspace based on it's workspaceId and teamId.
 * Throws an Error if something went wrong on the request.
 * @param teamId The teamId of the current logged in Team.
 * @param workspaceId The id of the workspace to delete.
 */
export async function deleteWorkspace(teamId: number, workspaceId: number) {
    const deleteRes = await fetch(`${API_BASE_URI}/deleteWorkspace`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    teamId: teamId,
                    workspaceId: workspaceId
                }
            ),
        }
    );
    if (!deleteRes.ok) {
        throw new Error(deleteRes.statusText);
    }
    return;
}

/**
 * Creates a Workspace based on the teamId. Creates an Id on the Server.
 * Throws an Error if something went wrong on the request.
 * @param teamId The teamId of the current logged in Team.
 * @param workspaceName The name of the workspace to create.
 */
export async function createWorkspace(teamId: number, workspaceName: string) {
    const createRes = await fetch(`${API_BASE_URI}/createWorkspace`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    teamId: teamId,
                    name: workspaceName
                }
            ),
        }
    );
    if (!createRes.ok) {
        throw new Error(createRes.statusText);
    }
    return;
}