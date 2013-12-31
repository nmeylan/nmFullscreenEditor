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
    jQuery(document).keyup(function(e) {
	        	  if (e.keyCode == 27 && jQuery(editorId).hasClass("fullscreenEditorOverlay")) { jQuery(editorId+" ."+textareaFsEditor.buttonClass).trigger("click"); console.log("aa"); }   // esc
	        	});
	        textareaFsEditor.initTab(editorId+" textarea");
	    },
	    initTab : function(editorId){
	    	jQuery(editorId).keydown(function (e) {
	    	    if (e.keyCode == 9) {
	    	    	e.preventDefault();
	    	    	var start = jQuery(this).get(0).selectionStart;
	    	    	var end = jQuery(this).get(0).selectionEnd;
	    	    	var selectedText = jQuery(this).val().substring(start,end);
	    	    	if(e.shiftKey){
	    	    		if(selectedText === ""){
	    	    			if(jQuery(this).val().substring(start-1,start) === "\t"){
	    	    				jQuery(this).val(jQuery(this).val().substring(0, start-1) + jQuery(this).val().substring(end,jQuery(this).val().length));
	    	    				jQuery(this).get(0).selectionStart = jQuery(this).get(0).selectionEnd = start - 1;
	    	    			}

		    	    	}else{
		    	    		//Update text content (tab. deletion)
		    	    		if(jQuery(this).val().substring(start-1,start) === "\t")
		    	    			jQuery(this).val().substring(start-1,start).replace("\t","");
		    	    		var val = jQuery(this).val().substring(0,start-1);
		    	    		//count the number of tab. (\t)
		    	    		var count = selectedText.match(/\n\t/g).length;
		    	    		val += selectedText.replace(/\n\t/g,"\n");
		    	    		val += jQuery(this).val().substring(end,jQuery(this).val().length);
		    	    		jQuery(this).val(val);
		    	    		//Selection position is updated
		    	    		jQuery(this).get(0).selectionStart = start - 1;
		    	    		jQuery(this).get(0).selectionEnd = end - count - 1;
		    	    	}
	    	    	}else{
		    	    	if(selectedText === ""){
			    	    	jQuery(this).val(jQuery(this).val().substring(0, start) + "\t" + jQuery(this).val().substring(jQuery(this).get(0).selectionEnd));
			    	    	jQuery(this).get(0).selectionStart = jQuery(this).get(0).selectionEnd = start + 1;
		    	    	}else{
		    	    		//Update text content (tab. deletion)
		    	    		var val = jQuery(this).val().substring(0,start);
		    	    		val += "\t";
		    	    		//count the number of tab. (\t) to add
		    	    		var count = selectedText.match(/\n/g).length;
		    	    		val += selectedText.replace(/\n/g,"\n\t");
		    	    		val += jQuery(this).val().substring(end,jQuery(this).val().length);
		    	    		jQuery(this).val(val);
		    	    		//Selection position is updated
		    	    		jQuery(this).get(0).selectionStart = start + 1;
		    	    		jQuery(this).get(0).selectionEnd = end + count + 1;
		    	    	}
	    	    	}
	    	    	return false;
	    	    }
	    	});
	    }
}

