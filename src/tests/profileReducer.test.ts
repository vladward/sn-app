import {addPostActionCreator, deletePostAC, ProfilePageType, profileReducer} from "../redux/profileReducer";

let state: ProfilePageType = {
    posts:  [
        {id: '1', message: "Hi how are you", likeCount: 3},
        {id: '2', message: "Yes no problem", likeCount: 6},
        {id: '3', message: "Ok, let's go", likeCount: 8},
    ],
    profile: null,
    status: '',
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('hi Vlad')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('hi Vlad')
})
test('after delete length of messages should be decremented', () => {
    let action = deletePostAC('3')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})