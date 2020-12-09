const products = [
  {
    name: 'Underwear',
    description: 'Make your sleep more comfortable',
    price: 25,
    category: 'beds',
    imageUrl: 'images/underwear.png'
  },

  {
    name: 'Bedding Set',
    description: 'Bedding set of 4 pieces',
    price: 398,
    category: 'beds',
    imageUrl: 'images/Bedding_set_of_4pieces.png'
  },

  {
    name: 'Bed Rack',
    description: 'Make your life more convenient',
    price: 19.9,
    category: 'beds',
    imageUrl: 'images/Bed_rack.png'
  },

  {
    name: 'Slippers',
    description: 'Make your life more convenient',
    price: 27.99,
    category: 'beds',
    imageUrl: 'images/slippers.png'
  },

  {
    name: 'Pajamas',
    description: 'Make your sleep more comfortable',
    price: 42.99,
    category: 'beds',
    imageUrl: 'images/pajamas.png'
  },

  {
    name: 'Bed Table',
    description: 'Make your life more convenient',
    price: 35.99,
    category: 'beds',
    imageUrl: 'images/bed_table.png'
  },

  {
    name: 'Mop',
    description: 'Easy to use, a home necessity',
    price: 9.98,
    category: 'cleaning',
    imageUrl: 'images/mop.png'
  },

  {
    name: 'Stainless Steel Wire Ball',
    description: 'Easy to use, a home necessity',
    price: 8.9,
    category: 'cleaning',
    imageUrl: 'images/Stainless_steel_wire_ball.png'
  },

  {
    name: 'Clean Sponge x 6',
    description: 'Easy to use, a home necessity',
    price: 12.25,
    category: 'cleaning',
    imageUrl: 'images/Clean_spongex6.jpg'
  },

  {
    name: 'Flat Mop',
    description: 'Easy to use, a home necessity',
    price: 12,
    category: 'cleaning',
    imageUrl: 'images/Flat_mop.png'
  },

  {
    name: 'Feather Duster',
    description: 'Easy to use, a home necessity',
    price: 18.5,
    category: 'cleaning',
    imageUrl: 'images/feather_duster.png'
  },

  {
    name: 'Broom Dustpan',
    description: 'Easy to use, a home necessity',
    price: 13.8,
    category: 'cleaning',
    imageUrl: 'images/Broom_dustpan.png'
  },

  {
    name: 'Coat Hanger',
    description: 'Easy to use, a home necessity',
    price: 19,
    category: 'daily',
    imageUrl: 'images/coat_hanger.png'
  },

  {
    name: 'Wooden Mat',
    description: 'Easy to use, a home necessity',
    price: 12.8,
    category: 'daily',
    imageUrl: 'images/Wooden_mat.png'
  },

  {
    name: 'Storage Box',
    description: 'Easy to use, a home necessity',
    price: 4.9,
    category: 'daily',
    imageUrl: 'images/storage_box.png'
  },

  {
    name: 'Hook',
    description: 'Easy to use, a home necessity',
    price: 9.9,
    category: 'daily',
    imageUrl: 'images/hook.png'
  },

  {
    name: 'Toothbrush',
    description: 'Easy to use, a home necessity',
    price: 19.9,
    category: 'daily',
    imageUrl: 'images/toothbrush.png'
  },

  {
    name: 'Toothpaste',
    description: 'Easy to use, a home necessity',
    price: 3.47,
    category: 'daily',
    imageUrl: 'images/toothpaste.png'
  },

  {
    name: 'Refrigerator',
    description: 'Easy to use, a home necessity',
    price: 718,
    category: 'Home appliance',
    imageUrl: 'images/refrigerator.png'
  },

  {
    name: 'Television',
    description: 'Easy to use, a home necessity',
    price: 2599.99,
    category: 'Home appliance',
    imageUrl: 'images/television.png'
  },

  {
    name: 'Microwave Oven',
    description: 'Easy to use, a home necessity',
    price: 198,
    category: 'Home appliance',
    imageUrl: 'images/microwave_oven.png'
  },

  {
    name: 'Dish-Washing Machine',
    description: 'Easy to use, a home necessity',
    price: 2555.99,
    category: 'Home appliance',
    imageUrl: 'images/dish-washing_machine.png'
  },

  {
    name: 'Washing Machine',
    description: 'Easy to use, a home necessity',
    price: 899.99,
    category: 'Home appliance',
    imageUrl: 'images/washing_machine.png'
  },

  {
    name: 'Oven',
    description: 'Easy to use, a home necessity',
    price: 269,
    category: 'Home appliance',
    imageUrl: 'images/oven.png'
  },

  {
    name: 'Frying pan',
    description: 'Easy to use, a home necessity',
    price: 49.99,
    category: 'kitchen',
    imageUrl: 'images/frying_pan.png'
  },

  {
    name: 'Pressure Cooker',
    description: 'Easy to use, a home necessity',
    price: 99.95,
    category: 'kitchen',
    imageUrl: 'images/Pressure_cooker.png'
  },

  {
    name: 'kettle',
    description: 'Easy to use, a home necessity',
    price: 15.55,
    category: 'kitchen',
    imageUrl: 'images/kettle.png'
  },

  {
    name: 'Chopsticks 4 pairs',
    description: 'Easy to use, a home necessity',
    price: 2.49,
    category: 'kitchen',
    imageUrl: 'images/Chopsticks_4pairs.png'
  },

  {
    name: 'Kitchen knife',
    description: 'Easy to use, a home necessity',
    price: 17.99,
    category: 'kitchen',
    imageUrl: 'images/kitchen_knife.png'
  },

  {
    name: 'Lunch Box',
    description: 'Easy to use, a home necessity',
    price: 13.34,
    category: 'kitchen',
    imageUrl: 'images/Lunch_box.png'
  },

  {
    name: 'Calbee Box of French fries  Takoyaki flavor  8 bags',
    description: 'Satisfy your desires!',
    price: 19.99,
    category: 'snack',
    imageUrl: 'images/Calbee.png'
  },

  {
    name: 'A box of chocolates',
    description: 'Satisfy your desires!',
    price: 15.99,
    category: 'snack',
    imageUrl: 'images/chocolates.png'
  },

  {
    name: 'Yogurt',
    description: 'Satisfy your desires!',
    price: 8.99,
    category: 'snack',
    imageUrl: 'images/yogurt.png'
  },

  {
    name: 'The Turkey noodles  super spicy  5 bags',
    description: 'Satisfy your desires!',
    price: 6.99,
    category: 'snack',
    imageUrl: 'images/Turkey_noodles.png'
  },

  {
    name: 'Gum',
    description: 'Satisfy your desires!',
    price: 1.99,
    category: 'snack',
    imageUrl: 'images/gum.jpg'
  },

  {
    name: 'ORIHIRO  jelly  Apple and grape flavors',
    description: 'Satisfy your desires!',
    price: 2,
    category: 'snack',
    imageUrl: 'images/ORIHIRO.png'
  },

  {
    name: 'Cheese flavored yogurt',
    description: 'Satisfy your desires!',
    price: 2.99,
    category: 'snack',
    imageUrl: 'images/Cheese_flavored_yogurt.png'
  },

  {
    name: 'Genki Forest  Sugar-Free  Sparkling Water',
    description: 'Satisfy your desires!',
    price: 1.99,
    category: 'snack',
    imageUrl: 'images/Genki_Forest.png'
  },

  {
    name: 'Pen',
    description: 'Guaranteed quality',
    price: 1.9,
    category: 'stationery',
    imageUrl: 'images/pen.png'
  },

  {
    name: 'A4 Bag',
    description: 'Guaranteed quality',
    price: 40.65,
    category: 'stationery',
    imageUrl: 'images/A4_bag.png'
  },

  {
    name: 'File',
    description: 'Guaranteed quality',
    price: 4.8,
    category: 'stationery',
    imageUrl: 'images/file.png'
  },

  {
    name: 'Sticky Note(450 sheets)',
    description: 'Guaranteed quality',
    price: 3.9,
    category: 'stationery',
    imageUrl: 'images/sticky_note_450sheet.png'
  },

  {
    name: 'Pencil Box',
    description: 'Guaranteed quality',
    price: 7.8,
    category: 'stationery',
    imageUrl: 'images/pencil_box.png'
  },

  {
    name: 'Marker 48 color',
    description: 'Guaranteed quality',
    price: 25.99,
    category: 'stationery',
    imageUrl: 'images/Marker_48_color.png'
  },

  {
    name: 'Hammer',
    description: 'Easy to carry and use',
    price: 15,
    category: 'tool',
    imageUrl: 'images/hammer.png'
  },

  {
    name: 'Pliers',
    description: 'Easy to carry and use',
    price: 9.9,
    category: 'tool',
    imageUrl: 'images/pliers.png'
  },

  {
    name: 'Wrench',
    description: 'Easy to carry and use',
    price: 8.9,
    category: 'tool',
    imageUrl: 'images/wrench.png'
  },

  {
    name: 'Nail',
    description: 'Easy to carry and use',
    price: 3.8,
    category: 'tool',
    imageUrl: 'images/nail.png'
  },

  {
    name: 'Screwdriver x 10',
    description: 'Easy to carry and use',
    price: 49.99,
    category: 'tool',
    imageUrl: 'images/screwdriver_10.png'
  },

  {
    name: 'Strong Pliers',
    description: 'Easy to carry and use',
    price: 29,
    category: 'tool',
    imageUrl: 'images/Strong_pliers.png'
  }
];
