export const mockSubmit = async (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // mockSubmit has a 50% chance of success and a 50% chance of failure
      const randomNum = Math.floor(Math.random() * 10)
      if (randomNum >= 5) {
        resolve({
          status: 'Success',
          message: 'Form submitted successfully',
        })
      } else {
        reject({
          status: 'Failure',
          message: 'Form could not be submitted due to error',
        })
      }
    }, 2000)
  })
}
