document.addEventListener('DOMContentLoaded',function(){
	var background = document.querySelector('.body')
	console.log(background)
	var LinkCinema = document.querySelector('#cinemaLink')
	LinkCinema.addEventListener('click',function(){
		background.style.backgroundImage = "url('https://tnbsx.github.io/Mapas/cinemas.PNG')"
	})
	var LinkTeatro = document.querySelector('#teatroLink')
	LinkTeatro.addEventListener('click',function(){
		background.style.backgroundImage = "url('https://tnbsx.github.io/Mapas/teatros.PNG')"
	})
	var LinkExpos = document.querySelector('#exposicaoLink')
	LinkExpos.addEventListener('click',function(){
		background.style.backgroundImage = "url('https://tnbsx.github.io/Mapas/exposicoes_2.PNG')"
	})
	var LinkMuseu = document.querySelector('#museuLink')
	LinkMuseu.addEventListener('click',function(){
		background.style.backgroundImage = "url('https://tnbsx.github.io/Mapas/museus_2.PNG')"
	})

})