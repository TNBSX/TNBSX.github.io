document.addEventListener('DOMContentLoaded',function(){
	var background = document.querySelector('.body')
	console.log(background)
	var LinkCinema = document.querySelector('#cinemaLink')
	LinkCinema.addEventListener('click',function(){
		background.style.backgroundImage = "url('Mapas/cinemas.png')"
	})
	var LinkTeatro = document.querySelector('#teatroLink')
	LinkTeatro.addEventListener('click',function(){
		background.style.backgroundImage = "url('Mapas/teatros.png')"
	})
	var LinkExpos = document.querySelector('#exposicaoLink')
	LinkExpos.addEventListener('click',function(){
		background.style.backgroundImage = "url('Mapas/exposicoes_2.png')"
	})
	var LinkMuseu = document.querySelector('#museuLink')
	LinkMuseu.addEventListener('click',function(){
		background.style.backgroundImage = "url('Mapas/museus_2.png')"
	})

})