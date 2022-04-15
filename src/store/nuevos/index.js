import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import getters from './getters'

const namespaced = true

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}
