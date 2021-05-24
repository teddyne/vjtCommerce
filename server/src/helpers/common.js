export const uniqueId = () => {
    const randomness = Math.random().toString().substr(2).substr(0, 6)
    const dateString = Date.now().toString(36).substr(0, 3)
    return randomness + dateString
}