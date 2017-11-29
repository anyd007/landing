$(document).ready(function () {
    const $contact = $('#fourth');
    $contact.waypoint(function () {
        console.log('dupa');
        const $only =  $('.seeme').append('<div class="news1 screen">\n' +
            '                          <div class="content extrusion">\n' +
            '                                  <h4>Napisz, napewno odpowiem</h4>\n' +
            '                              <form method="POST" action="http://formspree.io/andy-26@wp.pl">\n' +
            '                                       <label  type="email">Podaj swój adres e-mail</label>\n' +
            '                                      <input type="email" name="email" placeholder="Twój e-mail">\n' +
            '                                      <label  type="message">Napisz</label>\n' +
            '                                      <textarea name="message" placeholder="Zostaw wiadomość"></textarea>\n' +
            '                                      <input type="submit"> </input>\n' +
            '                                  </form>\n' +
            '                              <div class="bgimg">\n' +
            '                                                 <div class="social-container">\n' +
            '                                                <ul class="social-icons">\n' +
            '                                                               <li><a target="_blank" href="https://twitter.com/Andrzej_35" data-toggle="tooltip" title="Twitter"><i class="fa fa-twitter fa-3x"></i></a></li>\n' +
            '                                                                <li><a target="_blank" href="https://www.linkedin.com/in/andrzej-gebala/" data-toggle="tooltip" title="Linkedin"><i class="fa fa-linkedin fa-3x"></i></a></li>\n' +
            '                                                             </ul>\n' +
            '                                                    </div>\n' +
            '                                        </div>\n' +
            '                               </div>\n' +
            '                       </div>')
this.destroy();
    }, {offset:'70%'});


    $('[data-toggle="tooltip"]').tooltip();
});


