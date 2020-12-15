export const generateRandomData = (arr, limit = 4) => {
    const data = []
    for(let i = 0; i < arr.length; i++) {
        if(limit > 0 && i > limit) {
            break
        }
       const randomNumber = Math.floor(Math.random() * arr.length)
       data.push(arr[randomNumber])
    }
   return data
}