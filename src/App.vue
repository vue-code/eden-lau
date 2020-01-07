<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar color="primary" dark flat>
								<v-toolbar-title>Login form</v-toolbar-title>
								<v-spacer />
								<v-tooltip bottom>
									<template v-slot:activator="{ on }">
										<v-btn :href="source" icon large target="_blank" v-on="on">
											<v-icon>mdi-code-tags</v-icon>
										</v-btn>
									</template>
									<span>Source</span>
								</v-tooltip>
								<v-tooltip right>
									<template v-slot:activator="{ on }">
										<v-btn icon large href="https://codepen.io/johnjleider/pen/pMvGQO" target="_blank" v-on="on">
											<v-icon>mdi-codepen</v-icon>
										</v-btn>
									</template>
									<span>Codepen</span>
								</v-tooltip>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field label="Login" name="login" type="text" />

									<v-text-field id="password" label="Password" name="password" type="password" />
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer />
								<v-btn color="primary" v-on:click="submit">Login</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'

	Vue.use(VueAxios, axios)
	export default {

		props: {
			source: String,
		},
		data: () => ({

		}),
		methods: {
			submit: function() {

				axios.post('/login', {
						username: 'eden',
						password: 'maxwit'
					})
					.then(function(response) {
						console.log(response)
					})
					.catch(function(error) {
						console.log(error)
					});
			}
		}
	}
</script>
