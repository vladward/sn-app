import {DialogType, MessageType} from "../components/Dialogs/Dialogs"
import {ProfileType} from "../components/Profile/MyPosts/MyPosts";

export type ProfilePageType = {
    posts: Array<ProfileType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let rerenderEntireTree = (state: RootStateType) => {
    console.log('state change')
}

export let state: RootStateType = {
    profilePage: {
         posts: [
            {id: 1, message: "Hi how are you", likeCount: 3},
            {id: 2, message: "Yes no problem", likeCount: 6},
            {id: 3, message: "Ok, let's go", likeCount: 8},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "vlad", src: "https://avatars.githubusercontent.com/u/86200275?v=4"},
            {id: 2, name: "andrei", src: "https://sun9-82.userapi.com/impf/c851420/v851420101/ee006/xGkm5WXSTwQ.jpg?size=1620x2160&quality=96&sign=7f437383d44301927bca846393723c80&type=album"},
            {id: 3, name: "yuzik", src: "https://dnepr.news/images/cache/imagescacheimagesthumbNewstext/c-349-233-koryavchenkov-1.webp"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Bye"}
        ]
    }
}

export let addPost = () => {
    let newPost: ProfileType = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 1
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state