import { config } from "../config";

export type WorkspaceChangedType = {
    id: number;
    teamId: number;
    name: string;
    deleted?: boolean;
}

const STREAM_BASE_URI = config.streamBaseUri;

export function onWorkspacesStateChangedListener(teamId: number, callback: (changedWorkspace: WorkspaceChangedType) => void): WebSocket {
    const webSocket = new WebSocket(`${STREAM_BASE_URI}/${teamId}`);
    webSocket.onopen = () => console.log(`workspaces websocket stream opened for team with id ${teamId}`);
    webSocket.onclose = () => console.log('workspaces websocket stream closed');
    webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        callback(data);
    }
    return webSocket;
}