class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.FollowState = this.$el.data('initial-follow-state');
    }

    render() {
        if (this.followState === "followed")
    }
}

module.exports = FollowToggle;