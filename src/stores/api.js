export default {
  state: {
    rows: []
  },

  actions: {
    retrive: function() {
      const { dispatch } = this

      fetch('http://couchdb.miaodeli.com/mobile-guard/_all_docs?include_docs=true')
      .then(res => res.json())
      .then(body => {
        dispatch({
          type: 'api/save',
          payload: body
        })
      })
    },
    update: function() {
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