export default {
  state: {
    scores: []
  },

  actions: {
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