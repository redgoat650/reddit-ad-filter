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
    const adSidebar = document.getElementsByTagName('shreddit-sidebar-ad');
    for (const ad of adSidebar) {
        ad.style.display = 'none';
    }
}


// Function to remove comment page ad
function removeCommentPageAds() {
    const adCommentPage = document.getElementsByTagName('shreddit-comments-page-ad');
    for (const ad of adCommentPage) {
        ad.style.display = 'none';
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
