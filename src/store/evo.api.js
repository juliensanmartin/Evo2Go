const evoConfig = {
	url: 'https://evo.ca/api/Cars.aspx',
};

export const getAvailableVehicleEvo = () => {
  return fetch(`${evoConfig.url}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.data;
    })
    // .catch(error => {
    //   console.error(error);
    // });
};
