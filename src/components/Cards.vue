<template>
  <div id="cardsComponent">
    <h2>Cards</h2>
    <ul id="cardList" class="list-group" >
        <li v-for="card in cardsInfo" class="list-group-item list-group-item-default" @click="showCardDetails(card)" title="Click card to view details...">
           <div class="cards">          
            <label class="badge badge-secondary">Name:</label>
            <p> {{card.name}}</p>
            <label class="badge badge-secondary">Type:</label>
            <p> {{card.card_type}}</p>
         </div> 
         
        </li>
   
    </ul>
   
  </div>
</template>

<script>
  import { serverBus } from '../main.js';

  export default {
  name: 'Cards',
  data() {
  return {
  url: 'http://52.57.88.137/api/card_data/',
  cardNames: [
  'Burial from a Different Dimension',
  'Charge of the Light Brigade',
  'Infernoid Antra',
  'Infernoid Attondel',
  'Infernoid Decatron',
  'Infernoid Devyaty',
  'Infernoid Harmadik',
  'Infernoid Onuncu',
  'Infernoid Patrulea',
  'Infernoid Pirmais',
  'Infernoid Seitsemas',
  'Lyla, Lightsworn Sorceress',
  'Monster Gate',
  'One for One',
  'Raiden, Hand of the Lightsworn',
  'Reasoning',
  'Time-Space Trap Hole',
  'Torrential Tribute',
  'Upstart Goblin',
  'Void Seer'
  ],
  cardsInfo: [],
  card:{},
  defaultCard:{}
  }
  },
  methods: {
  fetchCards: function() {
  var self=this;
  this.cardNames.forEach(function(card,index) {
  self.$axios
  .get(self.url + card)
  .then(function(response) {
    if(index===0){
      self.defaultCard=response.data.data;
       serverBus.$emit('defaultCard', self.defaultCard);
    }
  self.cardsInfo.push(response.data.data);
  })
  });
  },
  showCardDetails:function(card){
  this.card = card;
  serverBus.$emit('selectedCard', this.card);
  }
  },
  mounted:function(){
  this.fetchCards();  
  }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  overflow-x:hidden;
  overflow-y:scroll;
  max-height: 550px;
}

li{
  margin-top:15px;
}

li:hover{
  background:rgba(0,0,0,0);
  box-shadow: inset 0 0 0 4px grey;
  cursor:pointer;
}
li:active{
  background:rgba(0,0,0,0);
  box-shadow: inset 0 0 0 4px grey;
  cursor:pointer;
}
.list-group-item-default{
  background-color: #d3d3d3;
}
</style>
