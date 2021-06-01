export const toLocalDateTime = (dateString) => {
    const localDate = new Date()
    const date = new Date(dateString)
    date.setHours(date.getHours() - (localDate.getTimezoneOffset() / 60))
    return formatTime(date)
}

export const formatTime = (dateString) => {
    const dateTime = new Date(dateString)
    const year = dateTime.getFullYear()
    const month = dateTime.getMonth()
    const date = dateTime.getDate()
    const hour = dateTime.getHours()
    const minute = dateTime.getMinutes()
    return `${date}/${month}/${year} ${hour}:${minute}`
}