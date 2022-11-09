import { useState } from 'react'
import { VscTrash } from 'react-icons/vsc'
import { AiFillHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart, lessTodCard, openModalDelete} from '../redux/shoppingSlice'

export const Card = ({id, title, avatar, color, size, code, price, count}) => {
    const dispatch = useDispatch()

    const addToCartAction = (idProduct) => {
        dispatch(addToCart({id: idProduct}))
    }

    const lessToCardAction = (idProduct) => {
        dispatch(lessTodCard({id: idProduct}))
    }

    const openModalDeleteAction = (idProduct, titleProduct, avatarProduct) => {
        const product = {
            id: idProduct,
            title: titleProduct,
            avatar: avatarProduct
        }
        dispatch(openModalDelete(product))
    }

    const totalPrice = (price) => {
        return (price).toFixed(2)
    }

    return (
        <figure className='flex flex-col md:flex-row justify-between border-b-[1px] pb-4'>
            <section className="flex gap-4" aria-label="items-information-detail">
                <img className="h-24 md:h-52 md:w-44 rounded-md object-cover" src={avatar} alt="image-product" />
                <figcaption className="text-gray-600 text-[13px]">
                    <h1 className="text-base md:text-lg  -tracking-wide font-semibold">{title}</h1>
                    <p className='mt-1 md:mt-2'>{code}</p>
                    <p className='mt-1 md:mt-4'>COLOR: {color}</p>
                    <p className='mt-1 md:mt-2'>SIZE: {size}</p>
                    <div className='mt-3 md:mt-5 flex flex-col md:flex-row items-start md:items-center justify-center gap-3 md:gap-5'>
                        <button onClick={() => openModalDeleteAction(id, title, avatar)} className='flex items-center justify-center gap-1'>
                            <VscTrash className='text-lg md:text-2xl hover:text-black' />
                            <p className='text-xs'>REMOVE ITEM</p>
                        </button>
                        <button className='flex items-center justify-center gap-1'>
                            <AiFillHeart className='text-base md:text-lg hover:text-red-600' />
                            <p className='text-xs'>MOVE TO WISHLIST</p>
                        </button>
                    </div>
                </figcaption>
            </section>
            <section className='flex flex-row-reverse md:flex-col justify-between mt-5' aria-label="items-amout">
                <div className='text-[12px] flex items-center border-[1px] rounded-sm'>
                    <button 
                    style={{ backgroundColor: count === 1 && 'rgb(243 244 246)' }} 
                    disabled={count === 1 ? true : false} 
                    onClick={() => lessToCardAction(id)} 
                    className='px-3 py-1 border-r-[1px] h-7 hover:bg-gray-100'
                    >
                    <AiOutlineMinus /></button>
                        <p className=' py-1 text-[13px] font-semibold w-[35px] text-center'>{count}</p>
                    <button onClick={()=> addToCartAction(id)} className='px-3 py-1 border-l-[1px] h-7 hover:bg-gray-100'><AiOutlinePlus/></button>
                </div>
                <h1 className='text-lg font-semibold md:mt-[102px] text-right'>${totalPrice(price * count)}</h1>
            </section>
        </figure>
    )
}