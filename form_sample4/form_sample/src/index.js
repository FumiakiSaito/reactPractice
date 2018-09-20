import React from 'react';
import ReactDOM from 'react-dom';


/**
 * テキストボックス
 */
class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.doSubmit(e)}>
                    <input type='text'
                           onChange={e => this.doChange(e)}
                           value={this.state.value} />
                    <input type='submit' />
                </form>
            </div>
        )
    }

    doChange(e) {
        // 変更されたらstateで管理する
        this.setState({value: e.target.value})
    }

    doSubmit(e) {
        e.preventDefault();
        window.alert(this.state.value);
    }
}

/**
 * チェックボックス
 */
class CboxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {check: true}
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.doSubmit(e)}>
                    <label>
                        <input type='checkbox'
                               onChange={e => this.doChange(e)}
                               checked={this.state.check}/>
                        食べる
                    </label><br />
                    <input type='submit' value='決定' />
                </form>
            </div>
        )
    }

    // チェックされたらトグル
    doChange(e) {
        this.setState({check: !this.state.check})
    }

    doSubmit(e) {
        e.preventDefault();
        window.alert(this.state.check ? '食べる' : '食べない')
    }
}

/**
 * テキストエリア
 */
class TextAreaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.doSubmit(e)}>
                    <textarea
                           onChange={e => this.doChange(e)}
                           value={this.state.value} />
                    <input type='submit' />
                </form>
            </div>
        )
    }

    doChange(e) {
        // 変更されたらstateで管理する
        this.setState({value: e.target.value})
    }

    doSubmit(e) {
        e.preventDefault();
        window.alert(this.state.value);
    }
}

/**
 * ラジオボタン
 */
class RadioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            value: ''
        }
    }

    render () {
        const radiolist = this.state.items.map(i => {
            return (
                <div key={i}>
                    <label>
                        <input type='radio'
                               name='items' value={i}
                               checked={this.state.value === i}
                               onChange={e => this.doChange(e)}/>{i}
                    </label>
                </div>
            )
        })

        // フォームにラジオ一覧を指定
        return (
            <div>
                <form onSubmit={e => this.doSubmit(e)}>
                    {radiolist}
                    <input type='submit' />
                </form>
            </div>
        )
    }

    doChange(e) {
        this.setState({value: e.target.value})
    }

    doSubmit(e) {
        e.preventDefault();
        window.alert(this.state.value);
    }

}


/**
 * セレクトボックス
 */
class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            value: props.value
        }
    }

    render () {
        const options = this.state.items.map(i => {
            return (
                <option key={i}
                        value={i}>{i}
                </option>
            )
        })

        // フォームにセレクトボックスを指定
        return (
            <div>
                <form onSubmit={e => this.doSubmit(e)}>
                    <select
                        value={this.state.value}
                        onChange={e => this.doChange(e)}>
                        {options}
                    </select><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }

    doChange(e) {
        this.setState({value: e.target.value})
    }

    doSubmit(e) {
        e.preventDefault();
        window.alert(this.state.value);
    }

}

ReactDOM.render(
    <div>
        <TextForm /><hr />
        <CboxForm /><hr />
        <TextAreaForm /><hr />
        <RadioForm items={['チョコ', '梅干し', 'ラムネ']} /><hr />
        <SelectForm items={['チョコ', '梅干し', 'ラムネ']}
                    value='ラムネ'/><hr />
    </div>,
    document.getElementById('root')
);
