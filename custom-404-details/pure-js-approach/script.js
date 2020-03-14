<script>
var currentUrl = window.location.href;
if(currentUrl.indexOf('/idx/') && document.querySelector('#IDX-detailsMissingPropertyAlert') !== null ) {
document.querySelector('#IDX-detailsMissingPropertyAlert').innerHTML='Property not found but here are some kittens<br><a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"></a>';
};
</script>
