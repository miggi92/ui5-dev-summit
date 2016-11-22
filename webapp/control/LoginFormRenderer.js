sap.ui.define(["jquery.sap.global"], function(jQuery) {
  "use strict";
  var LoginFormRenderer = {};
  LoginFormRenderer.render = function(oRm, oControl) {
    oRm.write("<div ");
    oRm.writeControlData(oControl);
    oRm.addClass("card");
    oRm.writeClasses();
    oRm.write(">");

    oRm.write("<div");
    oRm.addClass("spacerDiv");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");
    oRm.write("<div");
    oRm.addClass("container");
    oRm.writeClasses();
    oRm.write(">");
    oRm.renderControl(oControl._title);
    oRm.renderControl(oControl._input);
    oRm.renderControl(oControl._button);
    oRm.write("</div>");
    oRm.write("<div");
    oRm.addClass("spacerDivSmall");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");
    oRm.write("</div>");
  };
  return LoginFormRenderer;
}, /* bExport= */ true);