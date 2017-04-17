import { fetchCar2GoCars } from '../../store/Car/actions';
import { connect } from 'react-redux';

// we test these pure functions
export const mapStateToProps = (state, props) => fetchCar2GoCars(state, props.userId);

export default connect(mapStateToProps, null);

// from nicolas twitter guy
// import * as Users from '../../redux/modules/users'
// import { connect } from 'react-redux'
// import logout from '../../modules/logout'
//
// // we test these pure functions
// export const mapStateToProps = (state, props) => {
//   const user = Users.selectById(state, props.userId)
//   return { logout, user }
// }
//
// export const mapDispatchToProps = {
//   fetchUser: Users.fetch
// }
