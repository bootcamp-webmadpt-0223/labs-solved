function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const total = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = total.toFixed(2)
  return total
}

function calculateAll() {
  const products = document.querySelectorAll('.product')
  const totalPrice = document.querySelector('#total-value span')
  let sum = 0
  products.forEach(eachProduct => {
    sum += updateSubtotal(eachProduct)
  })
  totalPrice.textContent = sum.toFixed(2)
}

function removeProduct(event) {
  const button = event.currentTarget
  const column = button.parentNode
  const row = column.parentNode
  const table = row.parentNode
  table.removeChild(row)

  calculateAll()
}

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input')
  const nameValue = inputs[0].value
  const priceValue = inputs[1].value

  if (nameValue !== '') {
    const newRow = document.createElement('tr')
    newRow.setAttribute('class', 'product')
    document.querySelector('tbody').appendChild(newRow)
    newRow.innerHTML = `
      <td class="name">
        <span>${nameValue}</span>
      </td>
      <td class="price">$<span>${priceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button id="button" class="btn btn-remove">Remove</button>
      </td>
    `

    const removeBtn = newRow.querySelector('.btn-remove')
    removeBtn.addEventListener('click', removeProduct)

    const inputs = document.querySelectorAll('.create-product input')
    inputs[0].value = ''
    inputs[1].value = 0
  }
  else {
    alert("You must fill 'Product Name'")
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(eachBtn => eachBtn.addEventListener('click', removeProduct))

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
})
