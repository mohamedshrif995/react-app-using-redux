const initState={
    posts:[
        {id:1,title:'post1',body:'go to work '},
        {id:2,title:'post2',body:'have anice day '},

        {id:3,title:'post3',body:'have breack '},
        {id:3,title:'post4',body:'go to work again '},
        {id:3,title:'post5',body:'go to home '}

    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type=='DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id!==post.id
        })
        return{
            ...state,
            posts:newPosts
        }
    }
return state
}
export default rootReducer