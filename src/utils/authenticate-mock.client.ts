import { Team } from "../types/team.type";

const TEAM_ID_MOCK = 1;

/**
 * Authentication Mock to log in the requested team. 
 * This mock uses the teamId "1" as basic Mock teamId. 
 * To change the team used for all requests, change the @TEAM_ID_MOCK in this file.
 * @returns {Team} the currently logged in team, including the teamId, which is required for all requests.
 */
export function authenticateMock(): Team {
    return {
        id: TEAM_ID_MOCK
    };
}