const shareBtn = document.querySelector('.icon-container');
const shareBtnActive = document.querySelector('.icon-container-active');
var articleInfo = document.querySelector('.article-info');
var shareMenu = document.querySelector('.share-menu');
var triangle = document.querySelector('.triangle');

shareBtn.addEventListener('click', function() {   //swaps out article info for share menu
    articleInfo.classList.add('hidden');
    articleInfo.classList.add('active');
    shareMenu.classList.remove('hidden');
    triangle.classList.remove('opacity');
});

shareBtnActive.addEventListener('click', function() {
    shareMenu.classList.add('hidden');
    triangle.classList.add('opacity');
    articleInfo.classList.remove('hidden');
    articleInfo.classList.remove('active');
});