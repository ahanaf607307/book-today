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
        alert("Already Add wish List" , id)
    }
    else{
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList)
        localStorage.setItem('wish-list' , wishListStr)
    }
}

export {addWishList , getWishList}