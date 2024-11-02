import { toast } from 'react-toastify'
const getWishList = () => {
const wishListStr = localStorage.getItem('wish-list')
if(wishListStr){
    const wishList = JSON.parse(wishListStr)
    return wishList
}
else{
    return []
}
}

const addWishList = (id) => {
    const wishList = getWishList()
    if(wishList.includes(id)){

        toast.error('Already Add wish List', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    }
    else{
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList)
        localStorage.setItem('wish-list' , wishListStr)
        toast.success('Mark As Read Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
}

export {addWishList , getWishList}