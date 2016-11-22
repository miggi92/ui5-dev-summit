sap.ui.define([
  "sap/ui/core/Control",
  "sap/m/Button",
  "sap/m/Title",
  "sap/m/Input"
], function(Control, Button, Title, Input) {
  "use strict";

  var LoginForm = Control.extend("com.kaufland.summit.control.LoginForm", {
    metadata: {
      aggregations: {
        _button: {
          type: "sap.m.Button",
          multiple: false
        }
      },
      events: {
        loginPress: {
          parameters: {
            value: {
              type: "string"
            }
          }
        }
      },
      properties: {
        id: {
          type: "string"
        }
      }
    }
  });

  LoginForm.prototype.init = function() {
    this._title = new Title("title", {
      text: "Login",
      level: "H2"
    });
    this._input = new Input("input", {});
    this._button = new Button("button", {
      text: "Enter",
      press: this.onLoginButtonPress.bind(this)
    });
  };

  LoginForm.prototype.onLoginButtonPress = function() {
    this.fireLoginPress({
      value: this._input.getValue()
    });
  };

  return LoginForm;

});