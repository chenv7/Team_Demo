<<<<<<< HEAD
// 用户管理
export const state = () => {
    return {
        commentCount: 0
    }
}

export const mutations = {
    setUserInfo() { },
    setCommentCount(state, count) {
        state.commentCount = count
    }
};
export const actions = {

}
=======
//管理攻略页面的数据

export const state = () => ({
    //定义存储草稿箱标题
    draftsTitle : []
  })
  
  export const mutations = {
    //设置草稿箱标题
    setDraftsTitle(state,data) {
      state.draftsTitle.unshift(data)
    }
  }
>>>>>>> ef52f4f1a040f453c3e884b311ee1e5edc46acc1
