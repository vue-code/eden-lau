<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="5"
          md="2"
        >
          <v-text-field
            v-model="a"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="5"
          md="2"
        >
          <v-text-field
            v-model="b"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="5"
          md="2"
        >
          <v-text-field
            v-model="result"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="5"
          md="2"
        >		
			<div class="text-center">
				<v-btn rounded color="primary" dark @click="submit">Add</v-btn>
				
			</div>
		</v-col>
      </v-row>
    </v-container>
	
		
	
  </v-form>

</template>

<script>
  export default {
    data: () => ({
      
      a: '',
      b: '',
      result: '',

    }),
	methods: {
		submit: function(){
			this.result = Number(this.a) + Number(this.b)
		}
	}
  }
</script>