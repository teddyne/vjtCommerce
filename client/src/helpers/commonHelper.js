export const updateLocalStorage = (data, type) => {
    const dataLs = JSON.parse(localStorage.getItem('user'))
    if (dataLs && dataLs.user) {
        switch (type) {
            case 'cart': dataLs.user.carts = data; break
            case 'user': dataLs.user = data; break
            default: return
        }
      localStorage.setItem('user', JSON.stringify(dataLs))
    }
}

export const uniqueId = () => {
    const randomness = Math.random().toString(36).substr(7)
    const dateString = Date.now().toString(36).substr(5)
    return randomness + dateString
}