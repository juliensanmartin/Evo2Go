export const getAvailableMobi = () => {
  return fetch('http://vancouver-ca.smoove.pro/api-public/stations')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.result
    })
    // .catch(error => {
    //   console.error(error)
    // })
}
