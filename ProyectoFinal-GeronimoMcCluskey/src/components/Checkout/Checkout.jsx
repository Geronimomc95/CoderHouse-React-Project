import './Checkout.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, where, writeBatch , query , getDocs, Timestamp, addDoc} from "firebase/firestore"
import {db} from '../../firebase/firebase'
import CheckoutForm from '../CheckoutForm/CheckoutForm'



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async({name, phone, email}) => {
        setLoading(true)

        try{

            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())

            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where('doc.id', 'in', ids)));


            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id : doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error('hay productos que estan fuera de stock')
            }
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <h3 className="TitleCheckout">Se esta generando su pedido...</h3>
    }
    if (orderId) {
        return (
          <div>
            <h2 className="TitleCheckout">Gracias por confiar en nosotros</h2>
            <h3 className="TitleCheckout">El nro. de su orden es: {orderId}</h3>
          </div>
        );
      }

    return(
        <div>
            <h3 className="TitleCheckout">Generación del pedido</h3>
            <CheckoutForm onConfirm = {createOrder}/>
        </div>

    )
}

export default Checkout