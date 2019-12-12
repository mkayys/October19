const ApiUtil = require('./api_util');

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.toggleState = this.toggleState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.render = this.render.bind(this);
        this.bindEvent();
        this.render();
    }

    bindEvent() {
        this.$el.on('click', this.handleClick);
    }

    handleClick(e) {
        e.preventDefault();
        // let method;
        if (this.followState === "unfollowed") {
            // method = 'post';
            this.followState = "following";
            this.render();
            ApiUtil.followUser(this.userId).then(res => {
                this.followState = "followed";
                // this.toggleState();
                // console.log(this.followState)
                this.render();
            });
        } else {
            // console.log('i should be here')
            this.followState = "unfollowing";
            this.render();
            ApiUtil.unfollowUser(this.userId).then(res => {
                this.followState = "unfollowed";
                // this.toggleState();
                // console.log(this.followState)
                this.render();
            });
        }

        
    }

    toggleState() {
        
        if (this.followState === "followed") {
            this.followState = "unfollowed";
        } else {
            this.followState = "followed";
        }
    }

    render() {
        if (this.followState === "followed") {
            this.$el.prop('disabled', false);
            this.$el.html('Unfollow!');
        } else if (this.followState === "unfollowed") {
            this.$el.prop('disabled', false);
            this.$el.html('Follow!')
        } else if (this.followState === "following") {
            this.$el.prop('disabled', true);
            this.$el.html('following...!')
        } else {
            this.$el.prop('disabled', true);
            this.$el.html('unfollowing...!')
        }
    }
}

module.exports = FollowToggle;