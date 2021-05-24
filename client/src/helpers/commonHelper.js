export const updateLocalStorage = (data, type) => {
    const dataLs = JSON.parse(localStorage.getItem('user'))
    if (dataLs && dataLs.user) {
        switch (type) {
            case 'cart': dataLs.user.carts = data; break
            case 'user': dataLs.user = data; break
            default: return
        }
      localStorage.setItem('user', JSON.stringify(dataLs))
      console.log('setted user ls')
    }
}

export const uniqueOrderNumber = () => {
    const randomness = Math.random().toString().substr(2).substr(0, 6)
    const dateString = Date.now().toString(36).substr(0, 3)
    return randomness + dateString
}