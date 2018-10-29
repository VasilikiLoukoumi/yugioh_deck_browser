<template>
  <div id="cardComponent">
	<h2>Card Info</h2>
	<div class="cardInfo" v-if="isCardSelected">    
				<div class="row" >
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">        
				<img alt="card image" v-bind:src="imgUrl + selectedCard.name" class="img-fluid rounded" />
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div v-for="(value, key) in selectedCard">
      <span class="badge badge-info">{{key.charAt(0).toUpperCase()+ key.slice(1)}}:</span>
      <blockquote class="blockquote" v-if="value">{{value}}</blockquote>
      <blockquote class="blockquote" v-else>-</blockquote>
      </div>
			</div>
		</div>
	</div>
	<div v-else>
		
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<img ref="defImg" v-bind:alt="defaultCard.name +' image'" v-bind:src="imgUrl + defaultCard.name" class="img-fluid rounded" />
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       <div v-for="(value, key) in defaultCard">
      <span class="badge badge-info">{{key.charAt(0).toUpperCase()+ key.slice(1)}}:</span>
      <blockquote class="blockquote" v-if="value">{{value}}</blockquote>
      <blockquote class="blockquote" v-else>-</blockquote>
      </div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
  import { serverBus } from '../main.js';

  export default {
  name: 'Card',
  data() {
  return {
  selectedCard:{},
  defaultCard:{},
  imgUrl:'http://52.57.88.137/api/card_image/',
  isCardSelected:false
  }
  },
  methods:{

  },
  mounted:function(){  
  serverBus.$on('selectedCard', (card) => {
  this.isCardSelected=true;
  this.selectedCard = card;
  });
  serverBus.$on('defaultCard', (card) => {
  this.isCardSelected=false;
  this.defaultCard = card;
  });
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.blockquote {
  text-align: center;
}
.cardInfo{
  max-height: 450px;
  overflow-x: hidden;
  overflow-y:scroll;
}
</style>
