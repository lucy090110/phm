import React from 'react';
import { Col, Row, Table, Input } from 'antd';
import { columns1, columns2, dataSource1, dataSource2 } from './configData';

const { Search } = Input;

class TableComponent extends React.Component<any> {
    state = {
        table1Value: null,
        table2Value: null
    };
    onSearch1 = (table1Value:any) => {
        this.setState({
            table1Value
        });
        this.getDataSource();
    };
    onSearch2 = (table2Value:any) => {
        this.setState({
            table2Value
        });
        this.getDataSource();
    };
    getDataSource = () => {
        const { table1Value, table2Value } = this.state;
        let data1 = dataSource1;
        let data2 = dataSource2;
        if (table1Value) {
            data1 = dataSource1.filter((item1) => {
                return item1.managementNumber.indexOf(table1Value) > -1;
            });
        }
        if (table2Value) {
            data2 = dataSource2.filter((item2) => {
                return item2.name.indexOf(table2Value) > -1;
            });
        }
        return {
            data1,
            data2
        };
    };
    render() {
        const { height, cycle } = this.props;
        const { data1, data2 } = this.getDataSource();
        let tableClass = '';
        if (cycle) {
            tableClass = 'table-box-small';
        }
        return (
            <div className={`table-box ${tableClass}`}>
                {!cycle && (
                    <div className={'header'}>
                        <Row>
                            <Col flex={'80px'}>
                                <span className={'label'}>管理单号：</span>
                            </Col>
                            <Col flex={'auto'}>
                                <div className={'control'}>
                                    <Search
                                        placeholder="请输入管理单号"
                                        allowClear
                                        onSearch={this.onSearch1}
                                        style={{ width: 200 }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
                <Table
                    columns={columns1}
                    dataSource={data1}
                    pagination={false}
                    scroll={{ y: height ? height : 150 }}
                />
                {!cycle && (
                    <div className={'header'}>
                        <Row>
                            <Col flex={'80px'}>
                                <span className={'label'}>名称：</span>
                            </Col>
                            <Col flex={'auto'}>
                                <div className={'control'}>
                                    <Search
                                        placeholder="请输入名称"
                                        allowClear
                                        onSearch={this.onSearch2}
                                        style={{ width: 200 }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
                <Table
                    columns={columns2}
                    dataSource={data2}
                    pagination={false}
                    scroll={{ y: height ? height : 150 }}
                />
            </div>
        );
    }
}

export default TableComponent;
