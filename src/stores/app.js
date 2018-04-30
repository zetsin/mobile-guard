export default {
  state: {
    name: '',
    scores: []
  },

  actions: {
    sign: function(name) {
      const { dispatch } = this

      dispatch({
        type: 'app/save',
        payload: {
          name
        }
      })
    },
    answer: function(index, score) {
      const { dispatch, getState } = this

      const { app } = getState()
      app.scores[index] = score

      dispatch({
        type: 'app/save',
        payload: app
      })
    }
  },

  reducers: {
    save: (state, payload) => {
      return {
        ...state,
        ...payload
      }
    }
  }
}