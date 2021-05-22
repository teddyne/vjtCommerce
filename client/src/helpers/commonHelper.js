export const updateLocalStorage = (data, type) => {
    const dataLs = JSON.parse(localStorage.getItem('user'))
    if (dataLs && dataLs.user) {
        switch (type) {
            case 'cart': {
                dataLs.user.carts = data
            }
            break
            case 'user': {
                dataLs.user = data
            }
            break
        }
      localStorage.setItem('user', JSON.stringify(dataLs))
      console.log('setted user ls')
    }
}