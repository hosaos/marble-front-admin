import React, { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Form, Input, Button, Card, Select,Radio } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { formItemLayout, formSubmitLayout } from '@/constants/layout.form';

const FormItem = Form.Item;
const { Option } = Select;

@connect(({ webUser, loading }) => ({
  webUser,
  submitting: loading.effects['webUser/modifyWebUser'],
}))
@Form.create()
class WebUserForm extends PureComponent {
  state = {
    isNew: true,
  };

  static getDerivedStateFromProps(nextProps) {
    const { match } = nextProps;
    const webUserId = match.params.id;
    return {
      id: webUserId,
      isNew: webUserId == null,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    const { dispatch } = this.props;

    dispatch({
      type: 'webUser/updateEntity',
      payload: {},
    });

    if (!id) {
      return;
    }

    dispatch({
      type: 'webUser/getWebUser',
      payload: id,
    });
  }

  handleSubmit() {
    const { id } = this.state;
    const { dispatch, form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'webUser/modifyWebUser',
          payload: {
            id,
            ...values,
          },
        });
      }
    });
  }

  render() {
    const { submitting } = this.props;
    const {
      webUser: { webUserEntity },
      form: { getFieldDecorator },
    } = this.props;
    const { isNew, id } = this.state;

    return (
      <PageHeaderWrapper title={isNew ? '新建后台用户' : '修改后台用户'}>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            {!isNew && (
              <FormItem {...formItemLayout} label="ID">
                <span className="ant-form-text">{id}</span>
              </FormItem>
            )}
            <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name', {
                initialValue: webUserEntity.name,
                rules: [
                  {
                    required: true,
                    message: '姓名为必填项',
                  },
                ],
              })(<Input placeholder="姓名" />)}
            </FormItem>
            {isNew && (
              <FormItem {...formItemLayout} label="密码">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '密码为必填项',
                    },
                    {
                      min:6,
                      message: '密码不能少于6个字符',
                    }
                  ],
                })(<Input placeholder="密码" />)}
              </FormItem>
            )
            }
            <FormItem {...formItemLayout} label="手机号">
              {getFieldDecorator('mobile', {
                initialValue: webUserEntity.mobile,
                rules: [
                  {
                    required: true,
                    message: '手机号为必填项',
                  },
                  {
                    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                    message: '请输入正确的手机号'
                  }
                ],
              })(<Input placeholder="姓名" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="角色">
              {getFieldDecorator('role', {
                initialValue: webUserEntity.role,
                rules: [
                  {
                    required: true,
                    message: '请选择用户角色',
                  },
                ],
              })(
                <Radio.Group>
                  <Radio value={1}>代理公司</Radio>
                  <Radio value={2}>加工厂</Radio>
                  <Radio value={3}>矿山</Radio>
                </Radio.Group>
              )}
            </FormItem>

            <FormItem {...formSubmitLayout} style={{ marginTop: 32 }}>
              <Button type="primary" onClick={() => this.handleSubmit()} loading={submitting}>
                提交
              </Button>
              <Button style={{ marginLeft: 16 }} onClick={() => router.goBack()}>
                返回
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default WebUserForm;
