import { Layout } from './components/Layout'
import { Amount } from './components/Amount'
import { Card } from './components/Card'
import { useSelector } from 'react-redux'
import { ModalDelete } from './components/Modal-delete'

function App() {
  const { shoppingCart } = useSelector(state => state.shopping)
  return (
    <Layout>
      <ModalDelete />
      <section className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row  gap-4 mt-6 text-gray-600'>
        <section className='lg:w-8/12 rounded-lg p-5' aria-label='cart-product-wrapper'>
          <h1 className='font-semibold text-lg'>Card ({shoppingCart.length} items)</h1>
          <section className='mt-5 flex flex-col gap-3' aria-label='items-container'>
            {shoppingCart.length === 0 ? <p className='font-light'>Empty product in cart</p> :
            shoppingCart.map((P, i) => (
              <Card key={i} {...P}/>
            ))}
          </section>
        </section>
        <section className='lg:w-4/12 h-max'>
          <Amount />
        </section>
      </section>
    </Layout>
  )
}

export default App
