import { useMemo } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useSelector } from 'react-redux'

export const Amount = () => {
    const { shoppingCart } = useSelector(state => state.shopping)
    const AmountMemoize = useMemo(() => {
        return shoppingCart.reduce((acc, product) => acc + (product.count * product.price), 0)
    }, [shoppingCart])
    return (
        <>
            <section className='p-5 rounded-md text-[16px]' aria-label='total-amount'>
                <h1 className='font-semibold text-lg'>The total amout of</h1>
                <section className='flex flex-col gap-1 border-b-[1px] pb-3 mt-3'>
                <div className='flex items-center justify-between'>
                    <h1>Temporary amount</h1>
                    <p>$ {AmountMemoize}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h1>Shopping</h1>
                    <span>Gratis</span>
                </div>
                </section>
                <section className='pt-3'>
                <div className='font-semibold text-[15px] flex items-center justify-between'>
                    <h1>The Total amount of <br /> include (VAT)</h1>
                    <p>$ {AmountMemoize}</p>
                </div>
                <button className='bg-sky-600 hover:bg-sky-400 w-full rounded-md text-white text-sm py-3 mt-5'>GO TO CHECKOUT</button>
                </section>
            </section>
            <button 
                className='flex items-center justify-between px-4 py-5 w-full rounded-md text-base text-gray-600 mt-5'
                 aria-label='button-add-discounts'>
                <p>Add a discount code [optional]</p>
                <BiChevronDown className='text-[30px]'/>
            </button>
        </>
    )
}