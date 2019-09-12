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
