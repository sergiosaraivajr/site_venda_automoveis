$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); //executa o slide down e no segundo click o slide up//
    })

    $('#telefone').mask('(00) 00000-0000', { //aqui define o formato da mask - S define campo de letra e 0 de num.//
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu E-mail',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) { //interceptar o evento de envio do form//
            console.log(form)
        },
        invalidHandler: function(evento, validador) { //o validador tem a função que retorna a qtde de campos incorretos//
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos!`) //gera alerta ao user de qtos campos incorretos//
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})