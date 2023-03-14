import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/common/button/button.component";
import WorkspacesTable from "../../components/workspace-components/workspaces-table/workspaces-table.component";
import { selectTeam } from "../../store/team/team.selector";
import { addWorkspace, changeWorkspace, removeWorkspace, setWorkspaces } from "../../store/workspaces/workspaces.action";
import { selectWorkspaces } from "../../store/workspaces/workspaces.selector";
import { createWorkspace, listWorkspaces } from "../../utils/workspace-api.client";
import { onWorkspacesStateChangedListener, WorkspaceChangedType } from "../../utils/workspace-stream.client";
import styles from "./workspaces.module.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Modal from "../../components/common/modal/modal.component";
import TextInput from "../../components/common/text-input/text-input.component";

/**
 * The Base Component for showing and editing Workspaces.
 */
export default function Workspaces() {
    const dispatch = useDispatch();

    const [getWorkspacesError, setGetWorkspacesError] = useState(false);
    const currentTeam = useSelector(selectTeam);
    const workspaces = useSelector(selectWorkspaces);
    const [workspaceName, setWorkspaceName] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!currentTeam) {
            return;
        }
        const getWorkspaces = async () => {
            setGetWorkspacesError(false);
            try {
                const workspacesArray = await listWorkspaces(currentTeam.id);
                dispatch(setWorkspaces(workspacesArray));
            } catch (error) {
                console.error(error);
                setGetWorkspacesError(true);
            }
        };

        getWorkspaces();
    }, [dispatch, currentTeam]);

    useEffect(() => {
        if (!currentTeam || !workspaces) {
            return;
        }
        const webSocket = onWorkspacesStateChangedListener(currentTeam.id, (changedWorkspace: WorkspaceChangedType) => {
            if (changedWorkspace.deleted) {
                dispatch(removeWorkspace(workspaces, changedWorkspace));
                return;
            }
            if (workspaces.find((workspace) => workspace.id === changedWorkspace.id)) {
                dispatch(changeWorkspace(workspaces, changedWorkspace));
                return;
            }
            dispatch(addWorkspace(workspaces, changedWorkspace));
        });
        return () => {
            if (webSocket) {
                webSocket.close();
            }
        }
    }, [dispatch, currentTeam, workspaces]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const createWorkspaceHandler = async () => {
        if (!currentTeam) {
            return;
        }
        try {
            await createWorkspace(currentTeam.id, workspaceName);
            toggleModal();
        } catch (error) {
            console.error(error);
            alert("Something went wrong creating your Workspace.");
        }
    }

    const onHandleWorkspaceNameInput = (name: string) => { setWorkspaceName(name); }

    if (getWorkspacesError) {
        return <div>Something went wrong...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.workspaceContainer}>
                <div className={styles.buttonContainer}>
                    <Button onClick={toggleModal} label="New Workspace" icon={<PlusIcon />} />
                </div>
                <div className={styles.tableContainer}>
                    <WorkspacesTable />
                </div>
                <Modal
                    onClose={toggleModal}
                    onSubmit={createWorkspaceHandler}
                    show={showModal}
                    submitBtnLabel={"Create"}
                    modalHeading={"Create Workspace"}
                >
                    <TextInput onInput={onHandleWorkspaceNameInput} placeholder="Workspace name" />
                </Modal>
            </div>
        </div>
    )
}