import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1.jpg", blogDate: "May 2, 2021" },
      { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2.jpg", blogDate: "May 2, 2021" },
      { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3.jpg", blogDate: "May 2, 2021" },
      { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4.jpg", blogDate: "May 2, 2021" },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
