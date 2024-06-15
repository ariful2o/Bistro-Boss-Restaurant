import PropTypes from 'prop-types'
import useAxiosSecure from '../../../hooks/axios/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAddtoCart from '../../../hooks/addtoCart/useAddtoCart';

export default function ItemCard({item}) {
    const {recipe,name,image,price,_id}=item
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const [,refetch]=useAddtoCart()
    
    const handleAddtoCart = () => {
        const addFood = {foodId:_id,name,image,price,email:user.email}
        if(user.email){
            axiosSecure.post('/addtoCart',addFood).then(res=>{
                if (res.data.acknowledged) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Food has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
               
            })
        }
    }
    return (
        <div className="card w-96 bg-[#F3F3F3] shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-60 w-full" />
                <button className="absolute right-12 p-1 top-12 bg-black text-white">$ {price}</button>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddtoCart} className="text-[#BB8506] bg-[#E8E8E8] px-8 py-3 rounded-xl border-2 border-b-orange-500 hover:bg-[#1F2937] hover:border-orange-300">add to cart</button>
                </div>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    item:PropTypes.object.isRequired
}