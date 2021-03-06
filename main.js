/* Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.

Bonus1: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

Bonus2: Introdurre l' evento click sui pallini e visualizzare immagine relativa.

Bonus3: spazio alla fantasia */

var app = new Vue({
  el: "#root",

  data: {
    playstopClass: "fas fa-play-circle",
    imagesCounter: 0,
    images: [
      "https://images.unsplash.com/photo-1556653922-ca7aa575c39f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600965950524-532d27e7976e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601984285629-b43dc028bcd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530798416213-573c5a46afd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
  },

  methods: {
    // funzione per immagine precedente
    prevImage: function () {
      this.imagesCounter--;
      clearInterval(this.interval);
      if (this.imagesCounter < 0) {
        this.imagesCounter = this.images.length - 1;
      }
    },
    // funzione per immagine successiva
    nextImage: function () {
      this.imagesCounter++;
      clearInterval(this.interval);
      if (this.imagesCounter > this.images.length - 1) {
        this.imagesCounter = 0;
      }
    },
    // funzione per autoplay
    imagesAutoPlay: function () {
      this.playstopClass = "fas fa-stop";
      this.interval = setInterval(() => {
        this.imagesCounter++;
        if (this.imagesCounter > this.images.length - 1) {
          this.imagesCounter = 0;
        }
      }, 1500);

    },
    // funzione per stoppare l'autoplay
    refresher: function () {
      clearInterval(this.interval);
      location.reload();
    },
  },
});
















