<template>
      

  <section class="addsnippet">
    <div class="card">
        <label for="title">TITLE:  </label>
        <input type="text" placeholder="Add snippet-title here" maxlength="50"
        v-model="snippetData.title" :class="titleClass"
        @blur="titleIsTouched = true" />
        <span v-if="titleIsTouched && !titleIsValid" class="error"> {{ titleErrorMessage }} </span>
    </div>
  
        
    <div class="card">
      <label>CODESNIPPET:  </label> <span v-if="snippetIsTouched && !snippetIsValid" class="error"> {{ snippetErrorMessage }} </span>
        <div class="forms-row-textarea">
          <textarea type="text" rows="8" placeholder="Add your snippetcode here"
          v-model="snippetData.content" :class="snippetClass"
          @blur="snippetIsTouched = true" ></textarea>
        </div>
        <p>
          <button id="addBtn" @click="delayaAddDataAxiosSec" :disabled="waitingForResponseAddData || !formIsValid">Add snippet</button>

          <button id="addBtn" @click="test" >Test</button>

          <span v-if="errorOccurredAddData && !waitingForResponseAddData">  An error occured</span> <span v-if="waitingForResponseAddData">  Handeling API Request</span>
          <span v-if="snippetAddedBol && !waitingForResponseAddData"><strong class="justGreen">&#10004;</strong> SNIPPET SUCCESSFULLY ADDED</span>
        </p>
    </div>
  </section>

  

</template>

<script>
const urlPost = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?';



  export default  {
    name: 'addsnippet',
      components: {
      
  },
    props: {},


    data: () => ({
      waitingForResponseAddData: false,
      errorOccurredAddData: false,

      snippetData: {
        title: '',
        content:  '',
        },

      titleIsTouched: false,
      snippetIsTouched: false,
      snippetAddedBol: false,
    
    }),

    methods: {
      async delayaAddDataAxiosSec() { /*USING*/
        this.waitingForResponseAddData = true;
        this.errorOccurredAddData = false;
        setTimeout(await this.addDataAxiosSec);
		},

      async addDataAxiosSec() {
        try {
        let response = await this.axios.post(urlPost, {
          add: 'add',
          title: this.snippetData.title,
          content: this.snippetData.content,
        })
        console.log(response);
        if (response.data.status != 'success'){
          this.errorOccurredAddData = true;
        } else {
          this.snippetAddedBol = true;
          this.snippetData.title = '';
          this.snippetData.content = '';
        }
        } catch (error) {
          console.log(error);
          this.errorOccurredAddData = true;
        } finally {
        this.waitingForResponseAddData = false;
      }
    },
    
      async test() {
        try {
        let response = await this.$http.get('http://localhost:8080/deliveryorder/active')
        console.log(response.data);
        } catch (error) {
          console.log(error);

        }
		},



    },
    computed: {
    titleIsValid() {
			return this.snippetData.title.length >= 1 && this.snippetData.title.length <= 50;
    },

		titleClass() {
			if( !this.titleIsTouched ) return '';
			return this.titleIsValid ? 'valid' : 'invalid';
		},
    
    titleErrorMessage() {
			return 'Please enter at least one character and max fifthy'
    },
  
    snippetIsValid() {
			return this.snippetData.content.length >= 1 && this.snippetData.content.length <= 2000;
    },

		snippetClass() {
			if( !this.snippetIsTouched ) return '';
			return this.snippetIsValid ? 'valid' : 'invalid';
		},
    
    snippetErrorMessage() {
			return 'Please enter at least one character'
    },
		formIsValid() {
			return this.titleIsValid && this.snippetIsValid;
		}


    }
}


</script>

<style scoped>

label, span {
  font-size: 1em;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2px;
  color: white;
}

.forms-row-textarea {
  display: grid;
  grid-template-rows: 1fr;
  margin-top: 0.7em;
}

.card {
  margin-bottom: 0.3em;
  text-align: left;
  background-color: #358597;
  padding: 1em 1em 0.2em 1em;
}

.card > input {
  padding: 0.5em;
  margin-bottom: 0.7em;
}

.justGreen {
  color:rgb(65, 245, 185);
}

textarea.invalid { border-left: 4px solid red; }
textarea.valid { border-left: 4px solid rgb(19, 228, 19); } 

input.valid { border-left: 4px solid rgb(19, 228, 19); }
input.invalid { border-left: 4px solid red; }
.error {
	color: rgb(255, 193, 193);
	font-size: 90%;
}

.card button {
  margin-right: 0.3em;
  border: 3px solid #F4A896;
  outline: 0;
  padding: 5px 25px 5px 25px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2px;
}

.card button:hover {
  opacity: 0.8;
}

#addBtn { background-color: #499735; } #addBtn:disabled { background-color: #d3d1d1; cursor: not-allowed;}

 
</style>
