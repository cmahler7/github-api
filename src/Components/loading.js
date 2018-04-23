import React from 'react';


const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        text: props.text,
        speed: props.speed
    }
}

componentDidMount() {
    let stopper = this.props.text + '.....';
    this.interval = window.setInterval(function() {
        if(this.state.text === stopper) {
            this.setState(function() {
                return {
                    text: this.props.text
                }
            })
        }
        else {
            this.setState(function (prevState) {
                return {
                    text: prevState.text + '.'
                }
            })
        }
    }.bind(this), this.props.speed)
}

componentWillUnmount() {
    window.clearInterval(this.interval);
}
    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 1000
};

export default Loading;