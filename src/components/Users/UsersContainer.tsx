import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import PreLoader from "../PreLoader/PreLoader";
import {getUsers} from "../../api/users";

export type UsersMapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
export type UsersMapDispatchToPropsType = {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersContainerType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.items)
            this.props.setTotalUsersCount(res.totalCount)
        })
    }


    setCurrentPageHandler = (page: number) => {
        this.props.setIsFetching(true)
        getUsers(page, this.props.pageSize).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.items)
        })
        this.props.setCurrentPage(page)
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
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}
                             setCurrentPageHandler={this.setCurrentPageHandler}
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching: setIsFetchingAC
})(UsersContainer)

