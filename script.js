const shareBtn = document.querySelector('.icon-container');
const shareBtnActive = document.querySelector('.icon-container-active');
var articleInfo = document.querySelector('.article-info');
var shareMenu = document.querySelector('.share-menu');

shareBtn.addEventListener('click', function() {   //swaps out article info for share menu
    articleInfo.classList.add('hidden');
    shareMenu.classList.remove('hidden');
});

shareBtnActive.addEventListener('click', function() {
    shareMenu.classList.add('hidden');
    articleInfo.classList.remove('hidden');
});