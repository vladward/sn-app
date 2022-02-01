import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

export type AddMessageFormDataType = {
    newMessageBody: string
}

const maxLength10 = maxLengthCreator(10)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageBody"
                       placeholder="Enter you message..."
                       validate={[required, maxLength10]}
                       />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
