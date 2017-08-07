

import MessageInput from './MessageInput'
import React from 'react'
import renderer from 'react-test-renderer'
import setUpfiles from '../setUpfiles'


it('MessageInput test', () => {
  const state = { message: { previewVisible: false, fileList: [], title: '输入测试' } }
  const tree = renderer.create(<MessageInput state={ state } />)
  expect(tree).toMatchSnapshot()
})
