const storage = [
    { id: 1, image: 'images/croissant.png', name: 'Croissant', stock: 12, price: 1.7 },
    { id: 2, image: 'images/bread.png', name: 'Bread', stock: 7, price: 1.5 },
    { id: 3, image: 'images/cupcake.png', name: 'Cupcake', stock: 25, price: 1.6 },
    { id: 4, image: 'images/pretzel.png', name: 'Pretzel', stock: 0, price: 0.8 },
    { id: 5, image: 'images/muffin.png', name: 'Muffin', stock: 31, price: 2.3 },
    { id: 6, image: 'images/pancake.png', name: 'Pancake', stock: 10, price: 1.5 },
    { id: 7, image: 'images/waffle.png', name: 'Waffle', stock: 14, price: 2.2 },
    { id: 8, image: 'images/cake.png', name: 'Cake', stock: 3, price: 8.5 }
  ];
  
  const users = [
      { name: 'admin', password: 'admin' },
      { name: 'user',  password: 'user' }
  ];

  module.exports = {
      'storage': storage,
      'users': users
  }