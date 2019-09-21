let app = new Vue({
	el: '#app',
	data: {
		url: 'https://github.com/teiylog',
		nero_count: 1,
		neruna_count: 1,
		nero: '現在の寝ろ: 0',
		neruna: '現在の寝るな: 0',
		ratio: '1 : 1'
	},
	methods: {
		onClickNero: function() {
			let nero_str = this.nero_count.toLocaleString();
			++this.nero_count;
			this.nero = '現在の寝ろ: ' + nero_str;
		},
		onClickNeruna: function() {
			let neruna_str = this.neruna_count.toLocaleString();
			++this.neruna_count;
			this.neruna = '現在の寝るな: ' + neruna_str;
		}
	}
});