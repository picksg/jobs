import uuid from 'node-uuid';
import React from 'react';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                            </button>
                            <a className="navbar-brand" href="#">Jobs</a>
                        </div>

                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <hr />
                        <table style={{width: '100%'}}>
                            <Rows rows={mobileView}/>
                        </table>
                          <View />

                    </div>

                </div>

            </div>
        );
    }
}

class Rows extends React.Component {
    render() {
        var rows = [];

        for (var row in this.props.rows) {
            var name = this.props.rows[row].code + ' - ' + this.props.rows[row].name;
            var cost = this.props.rows[row].costType;
            rows.push(<tr><td>{name}<br/>{cost}</td><td ><input type="number"  style={{width: '50px'}}/></td><td  style={{width: '20px', textAlign: 'right'}} ><a href="#"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></td></tr>);
        }
        return(
            <tbody>
                {rows}
            </tbody>
        );
    }
}

var View = React.createClass({
    componentDidUpdate: function() {

    },
    render: function() {
        return(
            <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label forName="exampleInputEmail1" className="required">
                                        <span className="req">* </span>Job number</label>
                                    <input type="text" className="form-control" defaultValue="DDBM0157 "></input>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label forName="exampleInputEmail1" className="required">
                                        <span className="req">* </span>Job status</label>
                                    <input type="text" className="form-control" defaultValue="Draft"></input>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label forName="exampleInputEmail1" className="required">
                                        <span className="req">* </span>Start date</label>
                                    <input type="date" className="form-control" defaultValue="2016-04-16"></input>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label forName="exampleInputEmail1" className="required">
                                        <span className="req">* </span>End date</label>
                                    <input type="date" className="form-control" defaultValue="2016-05-16"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label forName="exampleInputEmail1" className="required">
                                        <span className="req">* </span>Job type</label>
                                    <select className="form-control" >
                                        <option>PEP0001</option>
                                        <option>PEP0002</option>
                                        <option>PEP0002</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />Billable</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label forName="costtype"><span className="req">* </span>Division</label>
                                    <select id="costtype" className="form-control">
                                        <option value="01">ARDI</option>
                                        <option value="02">Menu</option>
                                        <option value="03">three</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
});


const mobileView = [
    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'ARDI',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0002',
        name: 'Project of indeterminant length',
        costType: 'RESE',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0003',
        name: 'Sampling campaign 2016-2',
        costType: 'SMTD',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0004',
        name: 'Sampling campaign 2016',
        costType: 'IRLDEWYY',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0005',
        name: 'Sampling campaign 2016',
        costType: 'CostType',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'CostType',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'CostType',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'CostType',
        hours: 2.5,
        timer: false
    },
    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'Art direction',
        hours: 2.5,
        timer: false
    },

    {
        id: uuid.v4(),
        code: 'PEP0001',
        name: 'Sampling campaign 2016',
        costType: 'DRAPI',
        hours: 2.5,
        timer: false
    }
];
