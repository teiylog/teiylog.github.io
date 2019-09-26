let app = new Vue({
	el: '#app',
	data: {
		url: 'https://github.com/teiylog',
		nero_count: 1,
		neruna_count: 1,
		nero: '現在の寝ろ: 0',
		neruna: '現在の寝るな: 0',
		ratio: '50 : 50'
	},
	methods: {
		onClickNero: function() {
			let nero_str = this.nero_count.toLocaleString();
			++this.nero_count;
			this.nero = '現在の寝ろ: ' + nero_str;

			let max_value = this.nero_count + this.neruna_count;
			let f_ratio = Math.round( this.nero_count / max_value * 100 * 10 ) / 10;
			let s_ratio = Math.round( this.neruna_count / max_value * 100 * 10 ) / 10;
			this.ratio = '' + f_ratio + ' : ' + s_ratio;
		},
		onClickNeruna: function() {
			let neruna_str = this.neruna_count.toLocaleString();
			++this.neruna_count;
			this.neruna = '現在の寝るな: ' + neruna_str;

			let max_value = this.nero_count + this.neruna_count;
			let f_ratio = Math.round( this.nero_count / max_value * 100 * 10 ) / 10;
			let s_ratio = Math.round( this.neruna_count / max_value * 100 * 10 ) / 10;
			this.ratio = '' + f_ratio + ' : ' + s_ratio;
		}
	}
});