var app = new Vue({
  el: '#app',
  data: {
    // array di oggetti
    userSelected: 0,
    contatti:
    [
      // oggetto 1
      {
        name: 'Alessandro',
        avatar: '_1',
        visible: true,
        messages: [
          {
            text: 'Che squadra tifi?',
            date: '02.02.2021 ore 10.15',
            shortdate: '10.15',
            type: 'received'
          },
          {
            text: 'Nessuna in particolare tu?',
            date: '02.02.2021 ore 10.18',
            shortdate: '10.18',
            type: 'sent'
          },
          {
            text: 'LA MAGGICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            date: '02.02.2021 ore 10.18',
            shortdate: '10.18',
            type: 'received'
          }
        ]
      },
      // oggetto 2
      {
        name: 'Francesco',
        avatar: '_2',
        visible: true,
        messages: [
          {
            text: 'A che ora giochi domani?',
            date: '02.02.2021 ore 10.40',
            shortdate: '10.40',
            type: 'sent'
          },
          {
            text: 'Alle 15.30',
            date: '02.02.2021 ore 10.40',
            shortdate: '10.40',
            type: 'received'
          },
          {
            text: 'Ok, ti vengo a vedere',
            date: '02.02.2021 ore 10.41',
            shortdate: '10.41',
            type: 'sent'
          },
          {
            text: 'Grande, ti aspetto!',
            date: '02.02.2021 ore 10.41',
            shortdate: '10.41',
            type: 'received'
          }
        ]
      },
      // oggetto 3
      {
        name: 'Fabio',
        avatar: '_3',
        visible: true,
        messages: [
          {
            text: 'Vado al cinema',
            date: '02.02.2021 ore 12.24',
            shortdate: '12.24',
            type: 'sent'
          },
          {
            text: 'Che film danno?',
            date: '02.02.2021 ore 12.25',
            shortdate: '12.25',
            type: 'received'
          },
          {
            text: 'Tenet',
            date: '02.02.2021 ore 12.26',
            shortdate: '12.26',
            type: 'sent'
          }
        ]
      },
      // oggetto 4
      {
        name: 'Filippo',
        avatar: '_4',
        visible: true,
        messages: [
          {
            text: 'Domani vado a Roma a trovare Paolo',
            date: '02.02.2021 ore 12.45',
            shortdate: '12.45',
            type: 'received'
          },
          {
            text: 'Ah salutamelo allora!',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'sent'
          },
          {
            text: 'Certo!',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'received'
          },
        ]
      },
      // oggetto 5
      {
        name: 'Max',
        avatar: '_5',
        visible: true,
        messages: [
          {
            text: 'asdhvbkaslhdvbasklhdvbldsfhvbajskdvbasjdvbhasjkdvbhajskdvb',
            date: '02.02.2021 ore 12.45',
            shortdate: '12.45',
            type: 'received'
          },
          {
            text: 'Eh?',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'sent'
          },
          {
            text: 'Ah scusa mi è partito un messaggio',
            date: '12.46',
            shortdate: '12.46',
            type: 'received'
          },
        ]
      },
      // oggetto 6
      {
        name: 'Maria',
        avatar: '_6',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      },
      // oggetto 7
      {
        name: 'Mario',
        avatar: '_7',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      },
      // oggetto 8
      {
        name: 'Giorgio',
        avatar: '_8',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      }
    ], // fine contatti
    mainUser: {
      nome: 'Giulio',
      cognome: 'Tavoni',
      avatar: '_user',
      access: '02.02.2021 ore 15.47',
      description: 'Playing on'
    },
    messageInput: '',

  }, // fine data
  methods: {
    changeMessage(index) {
      this.userSelected = index;
    },
    sendMessage() {
      let shortDate = moment().format('HH:mm');
      let date = moment().format('L') + ' ore ' + shortDate; // 02/03/2021 ore ...
      console.log(date.replace(/\//g, "."));
      // pusho il messaggio nell'array
      this.contatti[this.userSelected].messages.push(
        {
          text: this.messageInput,
          date: date,
          shortdate: shortDate,
          type: 'sent'
        }
      );
      this.messageInput = '';

    }
  } // fine methods

});
