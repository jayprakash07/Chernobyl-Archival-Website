$(() => {
    let stickyTop = 0,
        scrollTarget = false;
    let timeline = $('.timeline__nav'),
        items = $('li', timeline),
        milestones = $('.timeline__section .milestone'),
        offsetTop = parseInt(timeline.css('top'));
    const TIMELINE_VALUES = {
        start: 190,
        step: 30
    };
    $(window).resize(function () {
        timeline.removeClass('fixed');
        stickyTop = timeline.offset().top - offsetTop;
        $(window).trigger('scroll');
    }).trigger('resize');
    $(window).scroll(function () {
        let sectionTop = $('.timeline__section').offset().top;
        let sectionBottom = sectionTop + $('.timeline__section').outerHeight();
        let scrollTop = $(window).scrollTop();
        if (scrollTop > sectionTop && scrollTop < sectionBottom) {
            timeline.addClass('fixed');
            timeline.css({
                'position': 'fixed',
                'top': '70px',
                'bottom': 'unset',
                'z-index': '1'
            });
        } else {
            timeline.removeClass('fixed');
            timeline.css({
                'position': 'absolute',
                'top': '',
                'bottom': '',
                'z-index': 'unset'
            });
        }
        let viewLine = scrollTop + $(window).height() / 3,
            active = -1;
        if (scrollTarget === false) {
            milestones.each(function () {
                if ($(this).offset().top - viewLine > 0) {
                    return false;
                }
                active++;
            });
        } else {
            active = scrollTarget;
        }
        items.filter('.active').removeClass('active');
        items.eq(active != -1 ? active : 0).addClass('active');
    }).trigger('scroll');
});
