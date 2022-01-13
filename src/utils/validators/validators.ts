export const required = (value: any) => {
    return value ? undefined : 'Field is required'
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}