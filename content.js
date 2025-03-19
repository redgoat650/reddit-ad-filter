// Function to remove ad posts
function removeAdPosts() {
    const adPosts = document.getElementsByTagName('shreddit-ad-post');
    for (const ad of adPosts) {
        ad.style.display = 'none';
    }
}

// Initial removal
removeAdPosts();

// Create observer to handle dynamically loaded content
const observer = new MutationObserver(() => {
    removeAdPosts();
});

// Start observing the document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});
