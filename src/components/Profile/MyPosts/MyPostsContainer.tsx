import {addPostActionCreator, ProfilePageType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MyPostsMapStateToPropsType = {
    profilePage: ProfilePageType
}
type MyPostsMapDispatchToPropsType = {
    addPost: (text: string) => void
}
export type MyPostsContainerType = MyPostsMapStateToPropsType & MyPostsMapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MyPostsMapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MyPostsMapDispatchToPropsType => {
    return {
        addPost: (text: string) => dispatch(addPostActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer