import React from 'react'

type ProfileStatusType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status ? this.props.status : 'Status is empty'
    }

    activateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    deActivateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
        this.props.updateUserStatusTC(this.state.status)
    }

    onChangeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log(prevProps)
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus
                               onBlur={this.deActivateEditMode}
                               onChange={this.onChangeStatusHandler}
                               value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}