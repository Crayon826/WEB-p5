const orderProblem = document.querySelector('#order-problem')
const radios = document.querySelectorAll('.type-select input')

for (let i = 0; i < radios.length; i++) {
  radios[i].onchange = function (e) {
    const oldOrderNum = document.querySelector('.order-num')

    if (e.target.id !== 'order-problem') {
      if (oldOrderNum) {
        document.querySelector('form').removeChild(oldOrderNum)
      } else {
        return
      }
    } else {
      const div = document.createElement('div')
      div.className = 'form-group order-num'
      div.innerHTML = `
        <label for="order-number">Order Number:</label>
        <div class="form-content">
          <input type="text" name="order-number" />
        </div>
      `
      document
        .querySelector('form')
        .insertBefore(div, document.querySelector('.message'))
    }
  }
}
