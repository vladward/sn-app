import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'

type ProfileStatusType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = ({status, updateUserStatusTC}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editStatus, setEditStatus] = useState<string>(status)

    useEffect(() => {
        setEditStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        updateUserStatusTC(editStatus)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setEditStatus(e.currentTarget.value)
    }

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            deActivateEditMode()
        }
    }
    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{status}</span>
                </div>
                : <div>
                    <input autoFocus
                           onKeyPress={onPressEnter}
                           onBlur={deActivateEditMode}
                           onChange={onChangeStatus}
                           value={editStatus}/>
                </div>}
        </div>
    )
}