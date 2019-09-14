// 用户管理
export const state = () => {
    return {
        //当前攻略评论数
        commentCount: 0,
        //选取回复攻略id
        commentInfo:{},
        //是否隐藏回复对象
        commentIsShow:0,
        //定义存储草稿箱标题
        draftsTitle: []
    }
}

export const mutations = {
    setUserInfo() {},
    //设置回复当前文章或评论
    setCommentIsShow(state,num){
        state.commentIsShow=num
    },
    //设置当前攻略评论数
    setCommentCount(state, count) {
        state.commentCount = count
    },
    //设置选取回复攻略id
    setCommentInfo(state,data){
        state.commentInfo=data
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

