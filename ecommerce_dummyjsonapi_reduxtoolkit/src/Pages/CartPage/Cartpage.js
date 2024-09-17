import React from 'react'
import { formatPrice } from '../../utils/helpers'
import './Cartpage.scss'
import { shopping_cart } from '../../utils/images'
import { removeFromCart, clearCart, getCartTotal, toggleCartQty, getAllCarts } from '../../store/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const dispatch = useDispatch()
  const carts = useSelector(getAllCarts)
  console.log("🚀 ~ CartPage ~ carts:", carts)
  const {itemsCount,totalAmount} = useSelector((state)=>state.cart)
  console.log("🚀 ~ CartPage ~ totalAmount:", totalAmount)
  console.log("🚀 ~ CartPage ~ itemsCount:", itemsCount)

  if(carts.length === 0){
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column font-manrope">
          <img src={shopping_cart} alt="" />
          <span className="fw-6 fs-15 text-gray">Your Shopping Cart is empty</span>
          <Link to='/' className='shopping-btn bg-orange text-white fw-5'>Go Shopping Now</Link>
        </div>
      </div>

    )
  }
  return (
    <div>CartPage</div>
  )
}

export default CartPage