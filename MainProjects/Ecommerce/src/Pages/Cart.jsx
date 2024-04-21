// Cart.js
import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { removeCart } from "../Redux/store"

function Cart() {
	const cart = useSelector((state) => state.products.cart)
    const dispatch= useDispatch()
	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						{item.title}{" "}
						<button
							className='inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0'
							onClick={() => dispatch(removeCart(item))}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<h1>Total:{cart.reduce((sum, pr) => sum + pr.price, 0)}</h1>
			<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
				checkout
			</button>
		</div>
	)
}

export default Cart
