import React from 'react'

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus onBlur={this.activateEditMode.bind(this)} value={this.props.status}/>
                    </div>}
            </div>
        )
    }
}