/**
	Author : Nicolas Meylan
	Date : 13-11-2013
	Description : this code just switch class and apply a specific style to display the textarea in fullscreen mode.
*/
var nmTextareaFsEditor = {
    buttonClass : "nmFullscreenEditorButton",
    initialize: function (editorId) {
	    editorId = "#"+editorId;
		jQuery(editorId+" textarea").css("resize","none");
        jQuery(editorId).prepend("<div class='nmFullscreenEditorHeader'> <a class='"+nmTextareaFsEditor.buttonClass+" open' href='#'></a></div>");
        jQuery(editorId+" ."+nmTextareaFsEditor.buttonClass).click(function (e) {
            e.preventDefault();
            jQuery(editorId+" ."+nmTextareaFsEditor.buttonClass).toggleClass("open").toggleClass("close");
			jQuery(editorId).toggleClass("nmFullscreenEditorOverlay");
			jQuery(editorId+" textarea").toggleClass("nmFullscreenEditor");
        });
    }
}

