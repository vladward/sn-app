import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirectComponent} from "../../HOC/WithAuthRedirect";

type ProfileMapStateToPropsType = {
    profile: ProfileType
}
type ProfileMapDispatchToPropsType = {
    getUserProfileTC: (id: string) => void
}
export type PathParamsType = {
    userId: string
}
type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: string,
    photos: PhotosType
}
export type ProfileContainerType = RouteComponentProps<PathParamsType> & ProfileConnectPropsType
export type ProfileConnectPropsType = ProfileMapStateToPropsType & ProfileMapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    // WithAuthRedirectComponent,
)(ProfileContainer)