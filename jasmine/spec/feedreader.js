// feedreader.js

$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have URLs defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        it('have names defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    describe('The menu', function() {
        it('is hidden by default', function() {
            var body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('changes visibility when the menu icon is clicked', function() {
            var body = $('body'), 
                menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
        });

        it('exist in the feed container when the loadFeed function is called and completes its work', function() {
            var entries = $('.entry');
            expect(entries.length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        var entries, originalEntry, newFeedEntry;
        beforeEach(function(done) {
            loadFeed(0, function() {
                entries = $('.entry');
                originalEntry = entries[0];
                loadFeed(1, function() {
                    entries = $('.entry');
                    newFeedEntry = entries[0];
                    done();
                });
            });
        });

        it('the content actually changes', function() {
            expect(originalEntry.textContent).not.toBe(newFeedEntry.textContent);
        });
    });
}());
