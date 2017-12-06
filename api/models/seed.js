const Product = require('./Product');

Product.create([
  { brandName: 'Coca Cola', name: '390ml glass bottle Coke' },
  { brandName: 'Sprite', name: '390ml glass bottle Sprite' },
  { brandName: 'Pepsi Max', name: '390ml glass bottle Pepsi Max' }
])
.then((products) => {
  console.log('Created!', products)
})
.catch((error) => {
  console.log('Unable to seed products!', error)
})
