import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, setCurrentPageAC, unFollowTC, UsersType} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import PreLoader from "../PreLoader/PreLoader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserSuper
} from "../../redux/selectors/users-selector/users-selector";

export type UsersMapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[]
}
export type UsersMapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: string) => void
    unFollowTC: (id: string) => void
}

export type UsersContainerType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }


    setCurrentPageHandler = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
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
                    />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
    return {
        users: getUserSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        getUsersTC: getUsersTC,
        followTC,
        unFollowTC
    }),
    withRouter,
)(UsersContainer)

