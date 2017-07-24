

export default (categoryxx, troubleKinds) => {
  const arr = troubleKinds.filter(item => item._id ===categoryxx)
  return arr.length ? arr[0].text : ''
}
