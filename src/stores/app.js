export default {
  state: {
    name: '',
    scores: [],
    story: ''
  },

  actions: {
    update: function(data={}) {
      const { dispatch } = this

      dispatch({
        type: 'app/save',
        payload: data
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
    },
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