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
    share: function() {
      const { getState } = this
      const { app } = getState()

      return fetch('http://couchdb.miaodeli.com/mobile-guard', {
        method: 'post',
　　　　　headers: {
  　　　　 'Content-Type': 'application/json',
　　　　 },
        body: JSON.stringify({
          ...app,
          userAgent: window.navigator.userAgent
        })
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