

import React from 'react'
import Select from 'antd/lib/select'

const TableFilter = ({ changeFun, arr }) => (
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="点击下拉列表选择或者输入搜索"
          Focus = { true }
          optionFilterProp="children"
          allowClear= { true }
          onChange={ changeFun }
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        {
          arr.map(item =>
            <Select.Option key={item._id} value={item._id} >{ item.name }</Select.Option>)
        }
        </Select>
  )

export default TableFilter
