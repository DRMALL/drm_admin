

import changeTroubleType from './changeTroubleType'

it('changeTroubleType test', ()=>{
  const arr = [{_id:555, text: '常见问题'}, { _id:666, text: '安全规程' }]
  expect(changeTroubleType(555, arr)).toBe('常见问题')
  expect(changeTroubleType('xxx', arr)).toBe('')
})
