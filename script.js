const inputs = document.getElementById('fisrt-weight')
const weightList = document.getElementById('second-weight')
const display = document.getElementById('display')
const buttonElement = document.getElementById('btn')

const getList = () => {
  const balanceList = weightList.value.split(',')
  return balanceList
}

const getVariables = () => {
  const variables = inputs.value.split(',')
  return variables
}

const balance = () => {
  const listArr = getList()
  const valArr = getVariables()
  for (let i = 0; i < listArr.length; i++) {
    for (let j = 0; j < listArr.length; j++) {
      if (+valArr[0] + +listArr[i] === +valArr[1] + +listArr[j]) {
        return `${listArr[i]}, ${listArr[j]}`
      }
    }
  }
  console.log(listArr)
  return 'Cannot be balanced'
}

buttonElement.addEventListener('click', () => {
  display.innerHTML = balance()
})
