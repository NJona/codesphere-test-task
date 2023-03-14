import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithProviders } from "../utils/test/test-utils";
import '@testing-library/jest-dom'
import Workspaces from '../routes/workspaces/workspaces.component'
import { API_BASE_URI } from '../utils/workspace-api.client'

const server = setupServer(
    rest.post(`${API_BASE_URI}/listWorkspaces`, (req, res, ctx) => {
        return res(ctx.json([{ id: 1, name: "Mocked" }, { id: 2, name: "Mocked2" }]))
    }),
    rest.post(`${API_BASE_URI}/createWorkspace`, (req, res, ctx) => {
        return res(ctx.text("Ok"));
    }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('load and list all workspaces', async () => {
    renderWithProviders(<Workspaces />, {
        preloadedState: {
            team: {
                team: {
                    id: 1
                }
            },
            workspaces: {
                workspaces: undefined
            }
        }
    });

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    const firstWorkspace = await screen.findByText("Mocked");
    const secondWorkspace = await screen.findByText("Mocked2");

    expect(firstWorkspace).not.toBeUndefined();
    expect(secondWorkspace).not.toBeUndefined();
})