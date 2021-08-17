import { Component } from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Test Name",
            counter: 0,
            // color: this.props.color
        }
        console.log("Hello From Constructor")
        // console.log(this.props.color)
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1})
    }

    setTimer = () => {
        this.timerHandle = setTimeout(() => {
            this.setState({counter: this.state.counter + 1})
        }, 3000)
    }

    clearTimer = () => {
        clearTimeout(this.timerHandle)
    }

    handleUpdate = () => {
        this.forceUpdate();
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('props:', props)
        // console.log('state:', state)
        console.log("Hello From get Derived State From Props")
        // return {color: props.color, name: 'Inside DerivedMethod'}
        return {color: props.color}
    }

    componentDidMount() {
        console.log("Hello From Comp.DidMount")
        this.setTimer();
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("nextProps:",nextProps)
        // console.log("nextState:",nextState)
        console.log("Hello From should Component Update")
        return this.state.counter < 5 ? true : false;
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Hello From Component Did Update");
        // console.log(snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log(prevState)
        console.log("Hello From get Snapshot Before Update");
        return { myName: "Leon", color: prevState.color}
    }

    componentWillUnmount() {
        console.log("Hello From component Will Unmount");
        this.clearTimer();
    }


    render() {
        console.log("Hello From Render")
        // console.log(this.state)
        return (
            <div>
                <h1>Hello From Class Component</h1>
                <p>{this.state.color}</p>
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>Increase</button>
                <button onClick={this.handleUpdate}>Force Update</button>
            </div>
        )
            
        
    }
}

export default ClassComponent;





