import { createStore } from 'vuex'
import axios from 'axios'
import { API_URL } from '../../app.config'

const Endpoint = {
    USERS_LIST: '/users'
}

const store = createStore({
    state() {
        return {
            users: [],
            singleUser: {},
            error: '',
        }
    },
    mutations: {
        SAVE_USERS(state, users) {
            state.users = users
        },
        SAVE_SINGLE_USER(state, user) {
            state.singleUser = user
        },
        SHOW_ERROR(state, error) {
            state.error = error
        }
    },
    actions: {
        megaIncrement(context) {
            context.commit('increment', 50)
            context.commit('decrement')
        },
        reset(context) {
            context.commit('reset')
        },
        async loadUsers({commit}) {
            await axios.get(`${API_URL}${Endpoint.USERS_LIST}`)
            .then(result => {
                commit('SAVE_USERS', result.data)
            }).catch(error => {
                commit('SHOW_ERROR', error)
                throw new Error(error)
            })
        },
    }
})

export default store