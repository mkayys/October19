const FollowToggle = require('./follow_toggle');


$(() => {
    const $btns = $('.follow-toggle');
    $btns.each((i, btn) => {
        new FollowToggle(btn);
    })
})