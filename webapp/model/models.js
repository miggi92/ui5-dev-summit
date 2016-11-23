sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function(JSONModel, Device) {
  "use strict";

  return {

    createDeviceModel: function() {
      var model = new JSONModel(Device);
      model.setDefaultBindingMode("OneWay");
      return model;
    },

    createAppModel: function() {
      var appModel = new JSONModel({
        userName: ""
      });
      return appModel;
    }

  };
});