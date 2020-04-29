// General React components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// General function libraries
import './sidebar.css';

// React Components
import Assets from '../assets/assets.jsx';
import Whitelist from '../whitelist/whitelist.jsx';
import { Transactions, getPending } from '../transactions/transactions.jsx';

export default class Sidebar extends Component {
    state = {
        assetsActive: "active",
        whitelistActive: "",
        txActive: ""
    };

    render() {
        return (
            <div className="sidebar" id="sidebar">
                <ul id="nav">
                    <div>
                        <li id="Assets" className={this.state.assetsActive}>
                            <a onClick={this.getAssets} href="!#">Assets</a></li>
                        <li id="Whitelist" className={this.state.whitelistActive}>
                            <a onClick={this.getSignAndAdd} href="!#">Whitelist </a></li>
                        <li id="Transactions" className={this.state.txActive}>
                            <a onClick={this.getTransactions} href="!#">Transactions</a></li>
                    </div>
                </ul>
            </div>
        );
    }

    getTransactions = async () => {
        this.setState({
            assetsActive: "",
            whitelistActive: "",
            txActive: "active"
        });

        await getPending();
        this.props.changePage(Transactions);
    }

    getAssets = () => {
        this.setState({
            assetsActive: "active",
            whitelistActive: "",
            txActive: ""
        });

        this.props.changePage(Assets);
    }

    getSignAndAdd = () => {
        this.setState({
            assetsActive: "",
            whitelistActive: "active",
            txActive: ""
        });

        this.props.changePage(Whitelist);
    }
}
