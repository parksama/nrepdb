/**
 * Node Replace DB
 * Sebuah tool sederhana untuk membatu me-replace string
 * pada file sql (database dump)
 * @author parksama [fuad_yusuf]
 *
 * usage: node nrepdb <source file> <str to find> <str to replace> <do fix serialization> [output file]
 */

var fs 			= require('fs');

var args 		= process.argv.slice(2);
var filename 	= args[0];
var dicari 		= args[1] || '';
var diganti 	= args[2] || '';
var do_fix 		= args[3] || '';
var output 		= args[4] || 'output.txt';

var terganti 	= 0;
var fixser 		= 0;

console.log("");

if(filename && dicari)
{
	data = fs.readFileSync(filename, {
		encoding: 'utf8',
		flag: 'r',
	});

	var new_data = data;
	var rgc = new RegExp(dicari, 'g');
	var rgs = new RegExp('s:(\\d+):([\\\\]?"[\\\\]?"|[\\\\]?"((.*?)[^\\\\])[\\\\]?");','g');

	var selisih = dicari.length - diganti.length;

	if(do_fix)
	{
		new_data = new_data.replace(rgs, function(data, data2, data3){
			ketemu = data3.match(rgc);
			if(ketemu)
			{
				fixser++;
				ketemu = ketemu.length;
				length = data2 - (selisih * ketemu);
				return 's:' + length + ':' + data3 + ';';
			}
			else
			{
				return data;
			}
		});
	}

	new_data = new_data.replace( rgc, function(){
		terganti++;
		return diganti;
	});

	fs.writeFileSync(output, new_data, {
		// encoding: 'utf8',
		// flag: 'r',
	});

	console.log('Success: yokatta.. kamu berhasil..' + "\n" + '         terjadi ' , terganti , ' replacement dan ', fixser, 'fix serialization.');
}
else
{
	console.log('Error: kurang argumen');
}