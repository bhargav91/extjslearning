Ext.define('ExtJSWebSpring.controller.LoginController', {
	extend : 'Ext.app.Controller',

	views : [ 'Login' ],

	init : function(application) {
		this.control({
			"login form button#submit" : {
				click : this.buttonSubmit
			},
			"login form button#cancel" : {
				click : this.buttonCancel
			}
		});
	},

	buttonSubmit : function(button, e, options) {
		console.log('Submit button');
		var formPanel = button.up('form');
		var login = button.up('login');
		var username = formPanel.down('textfield[name=user]').getValue();
		var password = formPanel.down('textfield[name=password]').getValue();

		if (formPanel.getForm().isValid()) {
			Ext.Ajax.request({
				url : 'login/authenticate.do',
				params : {
					user : username,
					password : password
				},

				failure : function(conn, response, options, eOpts) {
					Ext.Msg.show({
						title : 'Server Error',
						msg : conn.responseText,
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				},
				success : function(conn, response, options, eOpts) {
					var result = Ext.JSON.decode(conn.responseText, true);

					if (result.success) {
						Ext.Msg.show({
							title : 'Login successful!!.',
							msg : result.msg,
							buttons : Ext.Msg.OK
						});
					} else {
						Ext.Msg.show({
							title : 'Login failed',
							msg : result.msg,
							icon : Ext.Msg.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			});
		}

	},

	buttonCancel : function(button, e, options) {
		console.log('cancel button');
		button.up('form').getForm().reset();
	}
});