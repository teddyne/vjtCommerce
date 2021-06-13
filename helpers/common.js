export const uniqueId = () => {
    const randomness = Math.random().toString(36).substr(7)
    const dateString = Date.now().toString(36).substr(5)
    return randomness + dateString
}