import React from "react"
import Profile from "./Profile";

type ProfileMapStateToPropsType = {

}
type ProfileMapDispatchToPropsType = {

}

type ProfileContainerType = ProfileMapStateToPropsType & ProfileMapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}