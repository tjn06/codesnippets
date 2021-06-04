<template>

  <section class="header-component">
    <div class="fixed-header">
      <div class="content-header">
        <img src="../assets/logo-code.png">
      </div>

          
          <div class="loadingApiDiv">API STATUS  <span v-if="waitingForResponse || waitingForResponseReported || waitingForResponseBest">: HANDELING API REQUEST</span>
          <span v-if="errorOccurred || errorOccurredReported || errorOccurredBest">: AN ERROR OCCURED, PLEASE TRY AGAIN.</span></div>
          
        <div class="navDiv">
            <nav>
              <button @click="sorteringsNyckel = 'add'; show = 'addShow'" :class="{ selected: sorteringsNyckel == 'add' }"
              >ADD SNIPPET</button>

              <button @click="delayRequest" :disabled="waitingForResponse" :class="{ selected: sorteringsNyckel == 'latest'}">
              LATEST SNIPPETS</button>

              <button @click="delayRequestBest" :disabled="waitingForResponseBest" :class="{ selected: sorteringsNyckel == 'best'}">
              BEST SNIPPET</button>

              <button @click="delayRequestReported" :disabled="waitingForResponseReported" :class="{ selected: sorteringsNyckel == 'reported'}">
              REPORTED SNIPPET</button>
            </nav>
        </div>
    </div>



  <div class="content">
    <div class="middleContent">
      <div class="modelPlace">
      <addsnippet v-if="show=='addShow'"/>
      <latestsnippet v-if="show=='latestShow'"
      :modelFromHeader="model"
      @increment="delayRequest"
      @btnError="errorFromButton"/>
      <reportedsnippets v-if="show=='reportedShow'"
      :modelReportedFromHeader="modelReported"
      @triggerFromReport="delayRequestReported"
      @btnErrorR="errorFromButton"/>
      <bestsnippets v-if="show =='bestShow'"
      :modelBestFromHeader="modelBest"
      @triggerFromBest="delayRequestBest"
      @btnErrorB="errorFromButton"/>
      </div>
    </div>
	</div>
  </section>
  

</template>

<script>
const baseUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?';
import addsnippet from '../components/addsnippet';
import latestsnippet from '../components/latestsnippet';
import reportedsnippets from '../components/reportedsnippets';
import bestsnippets from '../components/bestsnippets';

  export default  {
    name: 'header-component',
      components: {
      addsnippet,
      latestsnippet,
      reportedsnippets,
      bestsnippets
  },
    props: {

      
    },

    data: () => ({
    sorteringsNyckel: 'namn',
    show: '',

    latest: 'latest',
    reported: 'reported',
    best: 'best',

    model: null,
    modelReported: null,
    modelBest: null,

		waitingForResponse: false,
    errorOccurred: false,

    errorOccurredReported: false,
    waitingForResponseReported: false,

    errorOccurredBest: false,
    waitingForResponseBest: false,

    }),

    methods: {
      errorFromButton () {
        this.errorOccurred = true;
      },

      noErrorFromButton () {
        this.errorOccurred = false;
      },

      delayRequest() { /*USING*/
			this.waitingForResponse = true;
      this.errorOccurred = false;
      this.show = 'latestShow';
      this.sorteringsNyckel = 'latest';
			setTimeout(this.sendLatestRequest);
		},

      async sendLatestRequest() {
			try {
				let response = await this.$http.get(baseUrl, {
					params: { latest: this.latest }
				});
				console.log('sendRequestLatest', response.data);
				this.model = {
					allContent: response.data
        }
			} catch(error) {
        console.log('Something went wrong', error);
        this.model = null;
				this.errorOccurred = true;
		
			} finally {
				this.waitingForResponse = false;
			}
    }, /*----------------------------*/
    
      delayRequestReported() { /*USING*/
			this.waitingForResponseReported = true;
      this.errorOccurredReported = false;
      this.show = 'reportedShow';
      this.sorteringsNyckel = 'reported';
			setTimeout(this.sendReportedRequest);
		},

      async sendReportedRequest() {
			try {
				let response = await this.$http.get(baseUrl, {
					params: { reported: this.reported }
				});
				console.log('sendRequestReported', response.data);
				this.modelReported = {
					allContent: response.data
        }
			} catch(error) {
        console.log('Something went wrong', error);
        this.modelReported = null;
				this.errorOccurredReported = true;
		
			} finally {
				this.waitingForResponseReported = false;
			}
    }, /*----------------------------*/
    

      delayRequestBest() { /*USING*/
			this.waitingForResponseBest = true;
      this.errorOccurredBest = false;
      this.show = 'bestShow';
      this.sorteringsNyckel = 'best';
			setTimeout(this.sendBestRequest);
		},

      async sendBestRequest() {
			try {
				let response = await this.$http.get(baseUrl, {
					params: { best: this.best }
				});
				console.log('sendRequestBest', response.data);
				this.modelBest = {
					allContent: response.data
        }
			} catch(error) {
        console.log('Something went wrong', error);
        this.modelBest = null;
				this.errorOccurredBest = true;
		
			} finally {
				this.waitingForResponseBest = false;
			}
		}, /*----------------------------*/
	
  },

  computed: {

	}

}
</script>

<style scoped>

.showInRow {
  display:flex;
}

.fixed-header{
  display: flex;
  align-items: center;
  justify-content: center;
	width: 100%;
	position: fixed;
	background: #358597;
	color: #fff;
	top: 0;
  flex-direction: column;
}

.content-header {
  display: flex;
  padding: 15px 0;
}

.loadingApiDiv {
  padding-top: 0.8em;
  display: flex;
  color: #F4A896;
  background: #ffffff;
  align-items: center;
  top: 0;
  width: 100%;
  justify-content: center;
  font-family: 'Vidaloka', serif;
  font-size: 0.75em;
  letter-spacing: 2px;
}

.navDiv {
  display: flex;
  background: #ffffff;
  align-items: center;
  top: 0;
  width: 100%;
  justify-content: center;
  padding-bottom: 0.6em;
}

nav {
  padding-top: 0.75em;
  display: block;
  
  /* background: #d8a7a7; */
  /* border: 1px solid gray; */
}

/*
nav a {
  border-bottom: 4px solid #9A9A9A;
  color: #9A9A9A;
  padding-bottom: 3px;
  margin-left: 1em;
  margin-right: 1em;
  font-family: 'Voltaire', sans-serif;
  font-size: 1em;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.1s;
  cursor: pointer;
}

nav a:hover, nav a:focus  {
color: #358597;
border-bottom: 4px solid #F4A896;
transition: all 0.3s;
}
*/

nav button {
  border-bottom: 4px solid #9A9A9A;
  border-top-style: none; border-left-style: none; border-right-style: none;
  background-color: Transparent;
  outline:none;
  padding: 0px;
  color: #9A9A9A;
  padding-bottom: 3px;
  margin-left: 1em;
  margin-right: 1em;
  font-family: 'Voltaire', sans-serif;
  font-size: 1em;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.1s;
  cursor: pointer;
}

nav button:hover, nav button:focus, nav button.selected {
color: #358597;
border-bottom: 4px solid #F4A896;
transition: all 0.3s;
}

nav button:disabled {
  color: rgb(209, 208, 208);
  border-bottom: 4px solid rgb(209, 208, 208);
  cursor: wait;
}

.content {
  display: flex ;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  align-items:center;
  margin-top: 180px;
}

.middleContent {
  max-width: 800px;
}

.modelPlace {
  width: 705px;
}




</style>
