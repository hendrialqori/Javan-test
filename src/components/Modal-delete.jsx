import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteProductFromCart, closeModalDelete } from "../redux/shoppingSlice"
import { Loading } from "./Loading"

export const ModalDelete = () => {
    const { isShowModal, isProductBeforeDelete } = useSelector(state => state.shopping)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const deleteProductFromCartAction = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(deleteProductFromCart({id: isProductBeforeDelete?.id}))
            setLoading(false)
        }, 2000)
    }

    const closeModalDeleteAction = () => {
        dispatch(closeModalDelete())
    }

    return (
        <section className={isShowModal ?'modal-open modal' : 'modal'}>
            <section className="w-10/12 md:w-5/12 lg:w-3/12 rounded-md shadow-lg bg-white flex flex-col items-center" aria-label="modal-container">
                <header className="p-4">
                <img
                    className="h-24 md:h-40 md:w-40 rounded-md object-cover" 
                    src={isProductBeforeDelete?.avatar} alt="product-avatar" />
                </header>
                <p className="text-center text-sm font-light leading-6">
                    Are you sure delete
                    <br /> <span className="font-semibold text-base">{isProductBeforeDelete?.title}</span>
                    <br /> from Shopping cart ?
                </p>
                <section className="flex items-center bg-gray-100 w-full mt-4">
                    <button onClick={deleteProductFromCartAction} className="w-6/12 py-2 border-r-[1px] hover:bg-gray-50 font-semibold">
                        { loading ? <Loading /> : 'Yes' }
                    </button>
                    <button onClick={closeModalDeleteAction} className="w-6/12 py-2 border-r-[1px] hover:bg-gray-50 font-semibold">Cencel</button>
                </section>
            </section>
        </section>
    )
}