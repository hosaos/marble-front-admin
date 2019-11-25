import React, { PureComponent, Fragment } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import { Card, Form, Input, Button, Row, Col, Divider, Modal, Tooltip } from 'antd';
import StandardTable from '@/components/StandardTable';
import StandardQueryList from '@/components/StandardQueryList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { formatFormValues, serializeSearchParam } from '@/utils/search';


const FormItem = Form.Item;

@connect(({ webUser, loading }) => ({
  webUser,
  loading: loading.models.webUser,
}))
@Form.create()
class WebUserList extends PureComponent {
  state = {
    selectedRows: [],
    formValues: {},
  };

  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '角色',
      dataIndex: 'roleDesc',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
    {
      title: '操作',
      render: (text, row) => (
        <Fragment>
          <Link to={`/webUser/${row.id}`}>修改</Link>
          <Divider type="vertical" />
          <a onClick={() => this.handleDeleteUser(row)}>删除</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'webUser/search',
    });
  }

  handleDeleteUser(row) {
    const { dispatch } = this.props;

    Modal.confirm({
      title: '删除',
      content: `确定删除用户"${row.name}"？`,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        dispatch({
          type: 'webUser/delete',
          payload: { id: row.id },
        });
      },
    });
  }

  handleSelectRows(rows) {
    this.setState({
      selectedRows: rows || [],
    });
  }

  handleStandardTableChange(pagination, filters, sorter) {
    const { dispatch } = this.props;
    const { formValues } = this.state;


    const params = serializeSearchParam(pagination, formValues, filters, sorter);

    dispatch({
      type: 'webUser/search',
      payload: params,
    });
  }

  handleFormReset() {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'webUser/search',
      payload: {},
    });
  }

  handleSearch() {
    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = formatFormValues(fieldsValue);

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'webUser/search',
        payload: {
          ...values,
        },
      });
    });
  }

  renderQueryForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="手机号">
              {getFieldDecorator('mobile')(<Input placeholder="精确查询" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="姓名">
              {getFieldDecorator('name')(<Input placeholder="支持模糊查询" />)}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const {
      webUser: { webUserList },
      loading,
    } = this.props;
    const { selectedRows } = this.state;

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <StandardQueryList
            form={this.renderQueryForm()}
            leftOperators={
              <Fragment>
                <Link to="/webUser/new">
                  <Button icon="plus" type="primary">
                    新建
                  </Button>
                </Link>
                {selectedRows.length > 0 && (
                  <span>
                    <Tooltip placement="topLeft" title="暂不支持">
                      <Button>批量删除</Button>
                    </Tooltip>
                  </span>
                )}
              </Fragment>
            }
            rightOperators={
              <Fragment>
                <Button icon="close" onClick={() => this.handleFormReset()}>
                  重置
                </Button>
                <Button icon="search" type="primary" onClick={() => this.handleSearch()}>
                  查询
                </Button>
              </Fragment>
            }
            table={
              <StandardTable
                selectedRows={selectedRows}
                loading={loading}
                data={webUserList}
                rowKey="id"
                columns={this.columns}
                onSelectRow={rows => this.handleSelectRows(rows)}
                onChange={(...args) => this.handleStandardTableChange(...args)}
              />
            }
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default WebUserList;
