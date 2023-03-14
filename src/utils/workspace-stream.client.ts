export type WorkspaceChangedType = {
    id: number;
    teamId: number;
    name: string;
    deleted?: boolean;
}

const STREAM_BASE_URI = "wss://39314-3000.2.codesphere.com";

export function onWorkspacesStateChangedListener(teamId: number, callback: (changedWorkspace: WorkspaceChangedType) => void): WebSocket {
    const webSocket = new WebSocket(`${STREAM_BASE_URI}/${teamId}`);
    webSocket.onopen = () => console.log(`ws opened for team with id ${teamId}`);
    webSocket.onclose = () => console.log('ws closed');
    webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        callback(data);
    }
    return webSocket;
}