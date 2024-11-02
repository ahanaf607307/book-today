import { toast } from 'react-toastify'
const getStoredList = () => {
 const storedListStr = localStorage.getItem('read-list');
 if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList
 }
 else{
    return []
 }
}

const setReadBook = (ids) => {
   localStorage.setItem('read-list' , JSON.stringify(ids))
}

const addToStoredList = (id) => {
    const storedList = getStoredList()
    if(storedList.includes(id)){
        toast.error('Already Add in LocalStorage', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list' , storedListStr)


        toast.success('Mark As Read Successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
}
export {addToStoredList , getStoredList , setReadBook}