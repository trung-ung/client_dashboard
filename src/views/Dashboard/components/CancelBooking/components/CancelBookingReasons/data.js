import uuid from 'uuid/v1'
import moment from 'moment'

export default [
  {
    id: uuid(),
    name: 'Reason one yksi mot',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours'),
    number: 7
  },
  {
    id: uuid(),
    name: 'Reason two kaksi hai',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours'),
    number: 5
  },
  {
    id: uuid(),
    name: 'Reason three kolme ba',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours'),
    number: 4
  }
]
