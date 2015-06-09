Ext.application({

	
	controllers:['LoginController'],
	name : 'ExtJSWebSpring',
	

	launch : function() {

		var task = new Ext.util.DelayedTask(function() {
			splashscreen.fadeOut({
				duration : 1000,
				remove : true
			});

			splashscreen.next().fadeOut({
				duration : 1000,
				remove : true,
				listeners:{
					afteranimate:function(el,startTime,eOpts){
						Ext.widget('login');
					}
				}
			

			});
			console.log('App lauchned');

		}

		);
		task.delay(2000);

	},
	init : function() {
		splashscreen = Ext.getBody()
				.mask('Loading application', 'splashscreen');
		console.log('App is init...');
	}

})