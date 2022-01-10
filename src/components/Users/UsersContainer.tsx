import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, setCurrentPageAC, unFollowTC, UsersType} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import PreLoader from "../PreLoader/PreLoader";

export type UsersMapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[]
    isAuth: boolean
}
export type UsersMapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followTC: (id: string) => void
    unFollowTC: (id: string) => void
}

export type UsersContainerType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    setCurrentPageHandler = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching
                    ? <PreLoader/>
                    : <Users users={this.props.users}
                             totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             isFetching={this.props.isFetching}
                             followingInProgress={this.props.followingInProgress}
                             setCurrentPageHandler={this.setCurrentPageHandler}
                             followTC={this.props.followTC}
                             unFollowTC={this.props.unFollowTC}
                             isAuth={this.props.isAuth}
                    />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC,
    followTC,
    unFollowTC
})(UsersContainer)

