

import MessageTable from './MessageTable'
import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('MessageTable test', () => {
  const state = { message: {
    messageArr: [{ title: '标题', abstract:'这是一段摘要', _id:'edt34', key:'edt34' },
                 { title: '标题', abstract:'这是一段摘要', _id:'df345',  key:'edt3df'  }],
    messageSelect: 'send' } }
    const wrapper = render(<MessageTable state={ state } />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
