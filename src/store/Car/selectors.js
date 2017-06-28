import { createSelector } from 'reselect'
import { concat, reduce, reject } from 'lodash'

// Selector for car model : define and transform data for component usage :
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

// Select entities from state
const getCar2GoVisibility = (state) => state.car.car2go.visible
const getEvoVisibility = (state) => state.car.evo.visible
const getBusVisibility = (state) => state.car.translink.visible
const getVisibleCars = (state) => state.car.visibleCars
const isLoaded = state => state.car.carLoaded

const getVisibleMarkers = createSelector(
  [ getCar2GoVisibility, getEvoVisibility, getBusVisibility ,getVisibleCars ],
  (car2goVisible, evoVisible, busVisibility, markers) => {
    let result = markers
    if (!car2goVisible) {
      result = reject(result, {type:'car2GoPin'})
    }
    if (!evoVisible) {
      result = reject(result, {type:'evoPin'})
    }
    if (!busVisibility) {
      result = reject(result, {type:'busPin'})
    }
    return result
  }
)

export {
  isLoaded,
  getVisibleMarkers,
  getCar2GoVisibility,
  getEvoVisibility,
  getBusVisibility
}
