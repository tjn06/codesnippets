<template>

    <section class="reportedsnippets" >
      <div class="modelPlace" v-if="modelReportedFromHeader">
        <div class="card" v-for="codeSnippet in modelReportedFromHeader.allContent" :key="codeSnippet.id">
          <div class="spaceBetweenInterface">
            <span>Title: <span class="apiInfoColor">{{ codeSnippet.title }}</span> </span>
            <span>Upload date: <span class="apiInfoColor">{{codeSnippet.upload_dt}}</span></span>
            <span>Rating: <span class="apiInfoColor">{{ codeSnippet.score}}</span></span>
          </div>
  
            <div class="snippet">{{ codeSnippet.content}}</div>

          <div class="spaceBetweenInterface">
            <p>
              <button id="unReportBtn" @click="delayUnReportRequest(codeSnippet.id)" :disabled="waitingForResponseUnReport">Unreport</button> 
              <button id="deleteBtn" @click="delayDeleteRequest(codeSnippet.id)" :disabled="waitingForDeleteResponse">Delete</button>
            </p>
            <p>
              <button id="voteBtnUp" @click="delayUpvoteRequest(codeSnippet.id)" :disabled="waitingForResponseUpvote"> <i class="fa fa-thumbs-o-up"></i></button>
              <button id="voteBtnDown" @click="delayDownVoteRequest(codeSnippet.id)" :disabled="waitingForResponseDownVote"><i class="fa fa-thumbs-o-down"></i></button>
            </p>
          </div>
          </div>
      </div>
          
    </section>

</template>

<script>
const urlPost = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?';

  export default  {
    props: {
      modelReportedFromHeader: Object()
    },
  
    data: () => ({

      waitingForDeleteResponse: false,
      errorOccurredDelete: false,

      waitingForResponseUpvote: false,
      errorOccurredUpvote: false,

      waitingForResponseDownVote: false,
      errorOccurredDownVote: false,

      waitingForResponseReport: false,
      errorOccurredReport: false,

      waitingForResponseUnReport: false,
      errorOccurredUnReport: false,

    }),
    methods: {
    
      async delayUnReportRequest(reportId) { /*USING*/
        this.waitingForResponseUnReport = true;
        this.errorOccurredReport = false;
        setTimeout(await this.UnReportSnippetAxios(reportId));
		},
    
      async UnReportSnippetAxios(itemReportId) {
        try {
        let response = await this.axios.post(urlPost, {
          unreport: 'unreport',
          id: itemReportId
        })
        console.log(response);
        }
        catch (error) {
        console.log(error);
        this.errorOccurredUnReport = true;
        this.$emit('btnErrorR');
        } finally {
        this.waitingForResponseUnReport = false;
        this.$emit('triggerFromReport');
      }
		}, /*----------------------------*/


      async delayDeleteRequest(item) { /*USING*/
        this.waitingForDeleteResponse = true;
        this.errorOccurredDelete = false;
        setTimeout(await this.deleteSnippetAxios(item));
		},
    
      async deleteSnippetAxios(itemdelete) {
        try {
        let response = await this.axios.post(urlPost, {
          delete: 'delete',
          id: itemdelete
        })
        console.log(response);
        }
        catch (error) {
        console.log(error);
        this.errorOccurredDelete = true;
        this.$emit('btnErrorR');
        } finally {
        this.waitingForDeleteResponse = false;
        this.$emit('triggerFromReport');
      }
    }, /*----------------------------*/
    
      async delayUpvoteRequest(upvoteId) { /*USING*/
        this.waitingForResponseUpvote = true;
        this.errorOccurredUpvote = false;
        setTimeout(await this.upvoteSnippetAxios(upvoteId));
		},
    
      async upvoteSnippetAxios(itemUpvoteId) {
        try {
        let response = await this.axios.post(urlPost, {
          upvote: 'upvote',
          id: itemUpvoteId
        })
        console.log(response);
        }
        catch (error) {
        console.log(error);
        this.errorOccurredUpvote = true;
        this.$emit('btnErrorR');
        } finally {
        this.waitingForResponseUpvote = false;
        this.$emit('triggerFromReport');
      }
    }, /*----------------------------*/
    
      async delayDownVoteRequest(downVoteId) { /*USING*/
        this.waitingForResponseDownVote = true;
        this.errorOccurredDownVote = false;
        setTimeout(await this.downVoteSnippetAxios(downVoteId));
		},
    
      async downVoteSnippetAxios(itemDownVoteId) {
        try {
        let response = await this.axios.post(urlPost, {
          downvote: 'downvote',
          id: itemDownVoteId
        })
        console.log(response);
        }
        catch (error) {
        console.log(error);
        this.errorOccurredDownVote = true;
        this.$emit('btnErrorR');
        } finally {
        this.waitingForResponseDownVote = false;
        this.$emit('triggerFromReport');
      }
		}, /*----------------------------*/

    },
    computed: {

    }
}


</script>

<style scoped>

.center {
  text-align:center;
}

.card {
  margin-bottom: 2em;
  text-align: left;
  background-color: #358597;
  padding: 1em 1em 0.2em 1em;
}

.spaceBetweenInterface {
  display: flex;
  justify-content: space-between;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2px;
  color: white;
}

.apiInfoColor {
  color: rgb(250, 194, 182);
  font-weight: 900;
}

.snippet {
  max-height: 9em;
  background-color: white;
  padding: 0.5em;
  margin-top: 0.7em;
  font-family: monospace;
  overflow: auto;
}

#voteBtnUp { background-color:transparent; margin-left: 1em; padding: 0px; font-size: 1.5em; border: none; color: #F4A896;} #voteBtnUp:disabled { cursor: wait;}
#voteBtnDown { background-color:transparent; margin-left: 1em; padding: 0px; font-size: 1.5em; border: none;} #voteBtnDown:disabled { cursor: wait;}
#unReportBtn { background-color: rgb(118, 191, 209); } #unReportBtn:disabled { cursor: wait; }
#deleteBtn { background-color: #973535; } #deleteBtn:disabled { cursor: wait; }


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

</style>