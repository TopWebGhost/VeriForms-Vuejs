module.exports = function(router){
	router.map({
		'/': {
			name:'home',
			component: function (resolve) {
				require(['./components/home.vue'], resolve)
			}
		},
		'formlists': {
			name:'formlists',
			component: function (resolve) {
				require(['./components/formlists.vue'], resolve)
			}
		},
    })

    router.redirect({

      '*': '/'
    })
	
}