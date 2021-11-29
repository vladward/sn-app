import {DialogsPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type DialogsMapStateToPropsType = {
    dialogsPage: DialogsPageType
}
export type DialogsMapDispatchToPropsType = {
    onChangeMessage: (body: string) => void
    sendMessageBody: () => void
}
export type DialogsContainerType = DialogsMapDispatchToPropsType & DialogsMapStateToPropsType

const mapStateToProps = (state: AppStateType): DialogsMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchToPropsType => {
    return {
        onChangeMessage: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessageBody: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer