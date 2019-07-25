import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deletePost} from '../actions/postActions'
 export class Posts extends Component {
    deletePost=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/Home')
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">
                    {this.props.post.title}
                </h4>
                <p className="center">
                    {this.props.post.body}
                </p>
                <div className="center">
                    <button className="btn grey" onClick={this.deletePost}>
                        delete
                    </button>
                </div>
            </div>
        ) : (
                <div className="center">
                    loading posts
            </div>
            )
        return (
            <div>
                {post}
            </div>
        )
    }
} 
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    deletePost:(id)=>{
        dispatch(deletePost(id))
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)

