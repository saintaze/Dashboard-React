export const mockSubmit = async (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 11);
      console.log('RAN', randomNum)
      if (randomNum >= 6) {
        resolve({
          status: 'success',
          message: 'Form submitted successfully!'
        });
      } else {
        reject({
          status: 'error',
          message: 'Form could not be submitted due to error!'
        })
      }
    }, 2000)
  })
}