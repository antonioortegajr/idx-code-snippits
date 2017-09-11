var currentUrl = window.location.href;
if (currentUrl.indexOf('/idx/') && document.getElementsByClassName("IDX-CustomLink")[0].href !== null ){
  var matterPortLink = document.getElementsByClassName("IDX-CustomLink")[0].href;
  document.getElementById('IDX-detailsGalleryAction').innerHTML='<iframe src="'+matterPortLink+'"></iframe>';
}
