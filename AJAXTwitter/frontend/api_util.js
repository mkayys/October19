const APIUtil = {
    followUser: id => {
        return $.ajax({
            method: 'post',
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    },

    unfollowUser: id => {
        return $.ajax({
            method: 'delete',
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    }
};

module.exports = APIUtil;