<template>
  <div class="hello">
    <h1>{{ "Chat: " + nombreSala }}</h1>

    <ul>
      <li>
        <button v-on:click="metodo1()">
            Toggle
        </button>

        <button v-on:click="firebaseCrear()">
            Firebase print
        </button>

        <input v-model="texto" placeholder="Escribe acá..."/>
      </li>
    </ul>

    <h2>Mensajes</h2>

    <div v-for="mensaje in mensajes">
      <b>{{mensaje.autor}}</b>
      <p>{{mensaje.contenido}}</p> 
    </div>

  </div>
</template>

<script>

const db = firebase.firestore();

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Esto es una prueba',
      msg2: ', muy bacana',
      boolean: true,
      texto: "",
      nombreSala: "",
      mensajes: []
    }
  },
  mounted: function(){
    const YO = this;
    db.collection("salasChat").doc("CiDhqO6sy35JzkWPbDss").collection("mensajes").get().then(function (query) {
      query.forEach(function(doc){
        console.log(doc.id, " => ", doc.data())
        YO.mensajes.push(doc.data());
      })
    })
  },
  methods: {
      metodo1 : function(){
          this.boolean = !this.boolean
          this.texto = "Uy que chimba"
      },
      firebaseCrear: function(){
        console.log(firebase);
        this.texto = firebase.toString()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
