/**
 * Created by wenwu on 2017/1/13.
 */
'use strict';
let Rcon = require('srcds-rcon');
let rcon = Rcon({
	address: '121.201.14.230:28016',
	password: 'www920423',
	port: '28016'
});
rcon.connect().then(() => {
	console.log('connected');
}).catch(console.error);