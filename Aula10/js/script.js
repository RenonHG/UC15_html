function botao() {
    // -----------BACKGROUND-----------
    //varável = documento selecionado pelo ID
    corpinho = document.getElementById("corpo")
    // console.log(corpinho)

    // className → lista os nomes da classe existente
    classe = corpinho.className
    // console.log(classe)

    // split → separa em array o texto
    classSeparado = classe.split(' ')
    console.log(classSeparado)

    // ------------------------BOX------------------------
    box = document.getElementById("caixa")
    classeBox = box.className

    classSeparadoBox = classeBox.split(' ')
    console.log(classSeparadoBox)

    // ---------------------TÍTULO------------------------
    titulo = document.getElementById("titulo_principal")
    classeTitle = titulo.className

    classSeparadoTitle = classeTitle.split(' ')
    console.log(classSeparadoTitle)

// ---------------------TEXTO------------------------
    texto = document.getElementById("palavras")
    classeTexto = texto.className

    classSeparadoTexto = classeTexto.split(' ')
    console.log(classSeparadoTexto)

    for (cont = 0; cont < classSeparado.length; cont++) {
        if (classSeparado[cont] == 'tomato') {
            // background
            corpinho.classList.remove("tomato")
            corpinho.classList.add("skyblue")

            // box
            box.classList.remove("skyblue")
            box.classList.add("tomato")

            // titulo
            titulo.classList.remove("font_branco")
            titulo.classList.add("font_black")

            // texto
            texto.classList.remove("font_black")
            texto.classList.add("font_branco")
        }
        if (classSeparado[cont] == 'skyblue') {
            // background
            corpinho.classList.remove("skyblue")
            corpinho.classList.add("tomato")

            // box
            box.classList.remove("tomato")
            box.classList.add("skyblue")

            // titulo
            titulo.classList.remove("font_black")
            titulo.classList.add("font_branco")

            // texto
            texto.classList.remove("font_branco")
            texto.classList.add("font_black")
        }
    }


}


