import { connect } from 'react-redux'
import About from './About.js'
import { initiateApp } from '../../modules/app'

const mapStateToProps = (state, ownProps) => {
  return {
    init: state.init
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(initiateApp())
    }
  }
}

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default AboutContainer