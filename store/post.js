// 用户管理
export const state = () => {
    return {
        commentCount: 0,
        //定义存储草稿箱标题
        draftsTitle: []
    }
}

export const mutations = {
    setUserInfo() {},
    setCommentCount(state, count) {
        state.commentCount = count
    },

    //设置草稿箱标题
    setDraftsTitle(state, data) {
        state.draftsTitle = data
    }
};
export const actions = {

}

