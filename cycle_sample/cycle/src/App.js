import React, { Component } from 'react';

class App extends Component {

    // マウント
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // コンポーネントがDOMにマウントされる前
    componentWillMount() {
        console.log('componentWillMount');
    }

    // コンポーネントがDOMにマウントされた直後
    componentDidMount() {
        console.log('componentDidMount');
    }

    // コンポーネントのプロパティが変更されたとき
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    // コンポーネントの外観を更新して良いかどうか判断する時
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    // コンポーネントが更新される直前
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // コンポーネントの描画直後
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // アンマウント
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // コンポーネントの描画
    render() {
        console.log('render');
        const setStateHandler = (e) => {
            console.log('* call setState()');
            this.setState({r: Math.random()});
        }

        return (
            <div>
            <button onClick={setStateHandler}>setState</button>
            </div>
        )
    }

}

export default App;
