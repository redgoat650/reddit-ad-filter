// Function to remove ad posts
function removeAdPosts() {
    const adPosts = document.getElementsByTagName('shreddit-ad-post');
    for (const ad of adPosts) {
        ad.style.display = 'none';
    }
}

// Function to remove ad comments
function removeAdComments() {
    const adComments = document.getElementsByTagName('shreddit-comment-tree-ad');
    for (const ad of adComments) {
        ad.style.display = 'none';
    }
}

// Function to remove ad sidebar
function removeSidebarAds() {
    const adSidebar = document.getElementById('shreddit-sidebar-ad');
    if (adSidebar) {
        adSidebar.style.display = 'none';
    }
}


// Function to remove comment page ad
function removeCommentPageAds() {
    const adCommentPage = document.getElementById('shreddit-comments-page-ad');
    if (adCommentPage) {
        adCommentPage.style.display = 'none';
    }
}

// Initial removal
removeAdPosts();
removeAdComments();
removeSidebarAds();
removeCommentPageAds();

// Create observer to handle dynamically loaded content
const observer = new MutationObserver(() => {
    removeAdPosts();
    removeAdComments();
    removeSidebarAds();
    removeCommentPageAds();
});

// Start observing the document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});
