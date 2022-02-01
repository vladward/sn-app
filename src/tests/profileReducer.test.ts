import {addPostActionCreator, ProfilePageType, profileReducer} from "../redux/profileReducer";
import {v1} from "uuid";

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('hi Vlad')
    let state: ProfilePageType = {
        posts:  [
            {id: v1(), message: "Hi how are you", likeCount: 3},
            {id: v1(), message: "Yes no problem", likeCount: 6},
            {id: v1(), message: "Ok, let's go", likeCount: 8},
        ],
        profile: null,
        status: '',
    }
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('hi Vlad')
})