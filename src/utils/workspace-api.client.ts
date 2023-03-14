import { Workspace } from "../types/workspace.type";

const API_BASE_URI = "https://39314-3000.2.codesphere.com";

const WORKSPACE_MOCKS: { [teamId: number]: Workspace[] } = {
    1: [
        {
            "id": 3,
            "name": "Workspace 1"
        },
        {
            "id": 4,
            "name": "Workspace 2"
        },
        {
            "id": 5,
            "name": "Workspace 3"
        },
        {
            "id": 6,
            "name": "Workspace 4"
        },
        {
            "id": 7,
            "name": "Workspace 5"
        }
    ]
};

export async function listWorkspaces(teamId: number): Promise<Workspace[]> {
    if (process.env.NODE_ENV === "development") {
        if (!WORKSPACE_MOCKS[teamId]) {
            return [];
        }
        return WORKSPACE_MOCKS[teamId];
    }
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

export async function deleteWorkspace(teamId: number, workspaceId: number) {
    if (process.env.NODE_ENV === "development") {
        WORKSPACE_MOCKS[teamId] = WORKSPACE_MOCKS[teamId].filter((workspace) => workspace.id !== workspaceId);
        return WORKSPACE_MOCKS[teamId];
    }
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

export async function createWorkspace(teamId: number, workspaceName: string): Promise<Workspace | undefined> {
    if (process.env.NODE_ENV === "development") {
        const lastId = WORKSPACE_MOCKS[teamId][WORKSPACE_MOCKS[teamId].length - 1].id;
        const newId = lastId + 1;
        const newWorkspace = {
            id: newId,
            name: workspaceName
        };
        WORKSPACE_MOCKS[teamId].push(newWorkspace);
        return newWorkspace;
    }
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