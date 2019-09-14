// 用户管理
export const state = () => {
    return {
        //当前攻略评论数
        commentCount: 0,
        //选取回复攻略id
        commentId:0,
        //定义存储草稿箱标题
        draftsTitle: []
    }
}

export const mutations = {
    setUserInfo() {},
    //设置当前攻略评论数
    setCommentCount(state, count) {
        state.commentCount = count
    },
    //设置选取回复攻略id
    setCommentId(state,id){
        state.commentId=id
    },

    //设置草稿箱标题
    setDraftsTitle(state,data) {
        state.draftsTitle.unshift(data)
    },

    //删除草稿箱
    deleteDraftsTitle(state,index) {
        state.draftsTitle.splice(index,1)
    }
};
export const actions = {

}

