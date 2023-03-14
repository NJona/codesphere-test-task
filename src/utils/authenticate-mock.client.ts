import { Team } from "../types/team.type";

const TEAM_ID_MOCK = 1;

export function authenticateMock(): Team {
    return {
        id: TEAM_ID_MOCK
    };
}