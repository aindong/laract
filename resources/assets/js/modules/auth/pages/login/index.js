import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import {actionCreators as authActionCreators} from "../../reducer";

import Page from "./Page"

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)