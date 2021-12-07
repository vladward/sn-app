import React from "react"
import Profile from "./Profile";

type ProfileMapStateToPropsType = {

}
type ProfileMapDispatchToPropsType = {

}

type ProfileContainerType = ProfileMapStateToPropsType & ProfileMapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}