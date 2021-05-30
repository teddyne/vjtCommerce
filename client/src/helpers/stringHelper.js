export const formatCurrency = (number) => {
    if (!number || number === 0) return '0₫'
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫`
}