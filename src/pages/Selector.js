import React, { Component } from 'react';
import { Select } from 'antd';

const {Option} = Select;
export default class Selector extends Component {
  state = {
    data: [],
  };

  componentWillMount() {
    const {data} = this.props;
    this.setState({
      data
    });
  }

  handleChange = (value) => {
    this.props.handleChangeSelect(value)
  }

  render() {
    const options = this.state.data.map(d => <Option key={d.id} value={d.id}>{d.name}</Option>);
    return (
      <Select onChange={this.handleChange}>
        {options}
      </Select>
    );
  }
}
