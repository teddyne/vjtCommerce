export const uniqueId = () => {
    const randomness = Math.random().toString().substr(2).substr(0, 4)
    const dateString = Date.now().toString(36)
    return dateString + randomness
}