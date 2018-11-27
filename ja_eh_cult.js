function before() {
  let test = document.querySelector('.escolha')
  test.classList.add('hidden')
  
  let load = document.querySelector('.load')
  load.classList.remove('hidden')
  
  setTimeout(after, 2000)
}

function after() {
  let test = document.querySelector('.escolha')
  test.classList.remove('hidden')
  
  let load = document.querySelector('.load')
  load.classList.add('hidden')
}



document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://ja-eh-cult.firebaseio.com/')

  let params = extract()

  let path = '/' + params['category'] + '/' + params['info']

  db.download(path, function(data) {

    console.log(data)
    replace('body', {
        'titulo':  params['info'],
        'local': data['local'],
        'hora': data['hora'],
        'preco': data['preco'],
        'imagem1': data['imagem1'],
        'imagem2': data['imagem2'],
        'imagem3': data['imagem3']
    })
  })
})