import React from 'react'

const Cart = () => {
  return (
    <div class="max-w-2xl my-20 mx-auto">
 
    <div class="bg-white p-4 mb-4 shadow-md rounded-md">
        <div class="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQ4ignyuHrp4s_fsiAWRJwn-vKQyBEHEzC8IbYlQtjC7p6u-a0aD6ZoQXvdGsCKVx1T0&usqp=CAU" alt="Product Image" class="w-16 h-16 object-cover rounded-md"/>
            <div class="ml-4">
                <h2 class="text-lg font-semibold">Shopping</h2>
                <p class="text-gray-600">Description</p>
            </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
            <div class="flex items-center">
                <label for="quantity" class="mr-2">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value="1" class="w-16 p-2 border rounded-md"/>
            </div>
            <p class="text-lg font-semibold">$99.99</p>
        </div>
    </div>

    
    <div class="bg-white p-4 shadow-md rounded-md">
        <div class="flex justify-between items-center">
            <p class="text-xl font-semibold">Subtotal:</p>
            <p class="text-xl font-semibold">$99.99</p>
        </div>
        <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Checkout</button>
    </div>
</div>
  )
}

export default Cart
