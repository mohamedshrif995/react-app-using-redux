import React, { Component } from 'react'
import Rinbow from '../hoc/Rinbow'
 class Contact extends Component {
     render() {
        //  setTimeout(() => {
        //     this.props.history.push('/About')
        //  }, 2000);
        return (
            <div className="container">
                <h1 className="container">
                    Conatct
                </h1>
            </div>
        )
    }
}

export default Rinbow(Contact)