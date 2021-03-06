import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, getUserStatusTC, savePhoto, updateUserStatusTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type ProfileMapStateToPropsType = {
    profile: ProfileType
    status: string
    authUserId: string
    isAuth: boolean
}
type ProfileMapDispatchToPropsType = {
    getUserProfileTC: (id: string) => void
    getUserStatusTC: (id: string) => void
    updateUserStatusTC: (status: string) => void
    savePhoto: (file: File) => void
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
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>) {
        if (this.props.match !== null && prevProps.profile !== null) {
            this.props.match.params.userId !== prevProps.profile.userId && this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         updateUserStatusTC={this.props.updateUserStatusTC}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhoto}),
    withRouter,
    // WithAuthRedirectComponent,
)(ProfileContainer)