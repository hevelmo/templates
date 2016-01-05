$(document).ready( function() {
    var bubble;
    function add_instant_drive_messages(){
        // Benchmark.
        var name = [ 'Itzel', 'Eduardo', 'Iván', 'Axel', 'Andrés', 'Bryan', 'José Carlos', 'Bernardo', 'Raquel', 'Rocío', 'Diego', 'Vicky', 'Marco', 'Óscar', 'Guillermo', 'Fernanda', 'Rafael', 'Luis', 'Guido', 'Rodrigo', 'Magdiel', 'Manuel', 'David', 'Alejandro' ];
        var car = [ 'un Swift', 'una Grand Vitara', 'un Swift Sport', 'una SX4 Crossover', 'un SX4 Sedán', 'un Kizashi' ];

        for (var i = 0; i < 3; i++) {
            var n = name[Math.floor(Math.random() * name.length )],
                c = car[Math.floor(Math.random() * car.length )],
                message = n + ' está probando ' + c + ' en este momento.';
            bubble.addMessage({
                'persona': n,
                'carro': c,
                'text'  : message,
                'class' : 'alert-instantdrive',
                'url'   : '/instantdrive'
            });
        }
    }
    bubble = new _bubble([
        {
            'text': '¿Por qué comprar una moto Suzuki? Te damos 10 razones para elegir una Suzuki.',
            'class': 'alert-suzuki',
            'url': '/motos/razones'
        },{
            'text': 'Más de 100 años de innovación nos dan la confianza de contar con la fidelidad de nuestros clientes.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-1'
        },{
            'text': 'La excelente fabricación de una Suzuki se refleja en su alto valor de reventa.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-2'
        },{
            'text': 'Tecnología e innovación directo de Japón. Ingenio y manufactura reconocidos en todo el mundo.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-3'
        },{
            'text': 'Durabilidad, confiabilidad calidad y tecnología son el sello que distingue todos nuestros productos.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-4'
        }, {
            'text': 'Motos de alto rendimiento que garantizan la máxima diversión con el menor gasto.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-5'
        }, {
            'text': 'Bajos costos de mantenimiento, porque nuestro compromiso es contigo siempre.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-6'
        }, {
            'text': 'Tu moto merece piezas originales de la más alta calidad para hacerla quedar como nueva.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-7'
        }, {
            'text': 'Somos amigos del medio ambiente. Nuestras motos cumplen con los estándares más altos de eficiencia.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-8'
        }, {
            'text': 'Garantías que nadie más ofrece. Hasta 2 años para las motos (sin límite de kilometraje).',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-9'
        }, {
            'text': 'Los mejores eventos y actividades de motociclismo para la comunidad Suzuki.',
            'class': 'alert-suzuki',
            'url': '/motos/razones#razon-10'
        }
    ]);
    /*
    Habilitar ya que esté el sitio de Suzuki
    if( instant_drive_available_time() ){
        add_instant_drive_messages();
    }
    */
    var no_open = ['instantdrive','razones'],
        current_url = ( window.location.pathname.split('/') )[1];
    if( $.inArray( current_url, no_open ) < 0 ){
        bubble.daemon(true);
    }

});
