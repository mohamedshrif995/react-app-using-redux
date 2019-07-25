import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import photo from './images.jpeg'
export class Home extends Component {

    render() {
        console.log('this.props', this.props)
        const { posts } = this.props
        const ListPosts = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={photo} alt="A Poke ball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">
                                    {post.title}
                                </span>
                            </Link>

                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">
                    no post yest
            </div>
            )
        return (
            <div className="container">
                <h1 className="container">
                    home
                </h1>
                {ListPosts}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)
