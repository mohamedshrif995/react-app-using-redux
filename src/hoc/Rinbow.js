import React from 'react'

const Rinbow = (WrapedComponent) => {
    const Colour = ['red', 'green', 'yellow', 'blue', 'orange']
    const randomColour = Colour[Math.floor(Math.random() * 4)]
    const className = randomColour + '-text'
    return (props) => {
        return (
            <div className={className}>
                <WrapedComponent  {...props} />
            </div>
        )
    }
}
export default Rinbow