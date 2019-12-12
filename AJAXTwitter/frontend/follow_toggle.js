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
        let method;
        if (this.followState === "unfollowed") {
            method = 'post';
        } else {
            // console.log('i should be here')
            method = 'delete'
        }

        $.ajax({
            method: method,
            url: `/users/${this.userId}/follow`,
            dataType: 'JSON'
        }).then(res => {
            
            this.toggleState();
            // console.log(this.followState)
            this.render();
        });
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
            this.$el.html('Unfollow!');
        } else {
            this.$el.html('Follow!')
        }
    }
}

module.exports = FollowToggle;