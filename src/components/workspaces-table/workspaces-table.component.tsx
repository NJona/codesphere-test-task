import { useSelector } from "react-redux";
import { selectTeam } from "../../store/team/team.selector";
import { selectWorkspaces } from "../../store/workspaces/workspaces.selector";
import { Workspace } from "../../types/workspace.type";
import { deleteWorkspace } from "../../utils/workspace-api.client";
import { DropdownOption } from "../dropdown/dropdown.component";
import ListItem from "../list-item/list-item.component";
import Table from "../table/table.component";
import WorkspaceTableHeader from "../workspace-table-header/workspace-table-header.component";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash-2.svg";

/**
 * An Implementation of the Table Component specific to Workspaces.
 * Handles Deleting Workspaces by providing a settings dropdown.
 */
export default function WorkspacesTable() {
    const workspaces = useSelector(selectWorkspaces);
    const team = useSelector(selectTeam);

    if (!team || !workspaces) {
        return <div>loading...</div>;
    }

    const deleteWorkspaceHandler = async (workspaceToDelete: Workspace) => {
        try {
            await deleteWorkspace(team.id, workspaceToDelete.id);
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    }

    const getDropdownOptions = (workspace: Workspace): DropdownOption[] => {
        return [
            {
                icon: <TrashIcon />,
                label: "Delete",
                onClick: () => deleteWorkspaceHandler(workspace)
            }
        ];
    }

    const workspaceRows = workspaces.map((workspace, index) => (
        <ListItem label={workspace.name} dropdownOptions={getDropdownOptions(workspace)} key={index} />
    ));

    return (
        <Table header={<WorkspaceTableHeader />} rows={workspaceRows} />
    )
}