

import changeTroubleType from './changeTroubleType'

it('changeTroubleType test', ()=>{
  expect(changeTroubleType('common')).toBe('常见问题')
  expect(changeTroubleType('xxx')).toBe(null)
})
