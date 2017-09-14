

  function getRichEditorValue(text){
    if(text[0]!=='<') return text
    else {
    let arr = text.split('>')
    let array = arr.filter(item => item[0]!=='<'&&item )
    array = array.map(item => item = item.split('<')[0])
    let str = array.join('').replace(/&nbsp;/, '')
    return str
    }

  }

export default getRichEditorValue
