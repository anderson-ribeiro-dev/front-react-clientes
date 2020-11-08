import React, { Component } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css';
import { get } from '../services/api'
import * as S from './styles'

class Cliente extends Component {
    state = {
        columns: [
            {
              title: 'Email',
              dataIndex: 'email',
              filters: [
                {
                  text: 'anderson',
                  value: 'anderson',
                },
                {
                  text: 'bruno',
                  value: 'bruno',
                },
                {
                    text: 'cesar',
                    value: 'cesar',
                },
                {
                    text: 'diego',
                    value: 'diego',
                },
                {
                    text: 'ederson',
                    value: 'ederson',
                },

              ],
              onFilter: (value, record) => record.email.indexOf(value) === 0,
              sorter: (a, b) => a.email.length - b.email.length,
              sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Name',
                dataIndex: 'name',
                filters: [
                    {
                        text: 'Eder',
                        value: 'Eder',
                    },
                    {
                        text: 'Diego',
                        value: 'Diego',
                    },
                    {
                        text: 'Cesar',
                        value: 'Cesar',
                    },
                    {
                        text: 'Bruno',
                        value: 'Bruno',
                    },
                    {
                        text: 'Anderson',
                        value: 'Anderson',
                    },
                ],
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Título',
                dataIndex: 'title',
                filters: [
                    {
                        text: 'Em atraso',
                        value: 'em atraso',
                    }
                   
                ],
                onFilter: (value, record) => record.title.indexOf(value) === 0,
                sorter: (a, b) => a.title.length - b.title.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
              title: 'Valor',
              dataIndex: 'value',
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.value - b.value,
            },
            {
              title: 'Desde',
              dataIndex: 'since',
              filters: [
                {
                  text: '2020-11-05',
                  value: '2020-11-05',
                },
                {
                  text: '2020-11-03',
                  value: '2020-11-03',
                },
                {
                    text: '2020-11-02',
                    value: '2020-11-02',
                },
                {
                    text: '2020-11-01',
                    value: '2020-11-01',
                },
                {
                    text: '2020-11-04',
                    value: '2020-11-04',
                },

              ],
              filterMultiple: false,
              onFilter: (value, record) => record.since.indexOf(value) === 0,
              sorter: (a, b) => a.since.length - b.since.length,
              sortDirections: ['descend', 'ascend'],
            },
        ],
        data: []   
    }


    componentDidMount() {
        this.getClientes()
    }

    async getClientes(){
        await get(`/clientes`)
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.error(err))
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    render(){
        const {columns, data} = this.state
        return(
            <>
                <S.Text>Lista de cliente inadimplentes</S.Text>
                <S.Table>
                    <Table pagination={false} columns={columns} dataSource={data} onChange={this.onChange} />
                </S.Table>
            </>
        )
    }
}

export default Cliente