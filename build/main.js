const panoImg = document.querySelector('.panoImg');
const fortyFeet = 'https://cdn.jsdelivr.net/gh/mistersuuns/panolens.js@master/asset/img/40ftHaliburton.jpg';

const panorama = new PANOLENS.ImagePanorama(fortyFeet);
const viewer = new PANOLENS.Viewer({
    container: panoImg
});

viewer.add(panorama);