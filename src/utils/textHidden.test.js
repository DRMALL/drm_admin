

import textHidden from './textHidden'

it('测试textHidden', () => {
  expect(textHidden('abcdef',10)).toBe('abcdef')
  expect(textHidden('abcdef',3)).toBe('abc...')
})
