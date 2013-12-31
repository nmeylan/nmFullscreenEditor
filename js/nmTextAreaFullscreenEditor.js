/**
	Author : Nicolas Meylan
	Date : 13-11-2013
	Description : this code just switch class and apply a specific style to display the textarea in fullscreen mode.
*/
var nmTextareaFsEditor = {
    buttonClass : "nmFullscreenEditorButton",
    initialize: function (editorId) {
	    editorId = "#"+editorId;
	    var editor = jQuery(editorId);
		jQuery(editorId+" textarea").css("resize","none");
        editor.prepend("<div class='nmFullscreenEditorHeader'> <a class='"+nmTextareaFsEditor.buttonClass+" open' href='#'></a></div>");
        jQuery(editorId+" ."+nmTextareaFsEditor.buttonClass).click(function (e) {
            e.preventDefault();
            jQuery(editorId+" ."+nmTextareaFsEditor.buttonClass).toggleClass("open").toggleClass("close");
			editor.toggleClass("nmFullscreenEditorOverlay");
			jQuery(editorId+" textarea").toggleClass("nmFullscreenEditor");
        });
    jQuery(document).keyup(function(e) {
	        	  if (e.keyCode == 27 && jQuery(editorId).hasClass("fullscreenEditorOverlay")) { jQuery(editorId+" ."+textareaFsEditor.buttonClass).trigger("click"); console.log("aa"); }   // esc
	        	});
	        textareaFsEditor.initTab(jQuery(editorId+" textarea"));
	    },
	    initTab : function(editor){
	    	editor.keydown(function (e) {
	    	    if (e.keyCode == 9) {
	    	    	e.preventDefault();
	    	    	var self_element = jQuery(this);
	    	    	var start = self_element.get(0).selectionStart;
	    	    	var end = self_element.get(0).selectionEnd;
	    	    	var selectedText = self_element.val().substring(start,end);
	    	    	if(e.shiftKey){
	    	    		if(selectedText === ""){
	    	    			if(self_element.val().substring(start-1,start) === "\t"){
	    	    				self_element.val(self_element.val().substring(0, start-1) + self_element.val().substring(end,self_element.val().length));
	    	    				self_element.get(0).selectionStart = self_element.get(0).selectionEnd = start - 1;
	    	    			}

		    	    	}else{
		    	    		//Update text content (tab. deletion)
		    	    		if(self_element.val().substring(start-1,start) === "\t")
		    	    			self_element.val().substring(start-1,start).replace("\t","");
		    	    		var val = self_element.val().substring(0,start-1);
		    	    		//count the number of tab. (\t)
		    	    		var count = selectedText.match(/\n\t/g).length;
		    	    		val += selectedText.replace(/\n\t/g,"\n");
		    	    		val += self_element.val().substring(end,self_element.val().length);
		    	    		self_element.val(val);
		    	    		//Selection position is updated
		    	    		self_element.get(0).selectionStart = start - 1;
		    	    		self_element.get(0).selectionEnd = end - count - 1;
		    	    	}
	    	    	}else{
		    	    	if(selectedText === ""){
			    	    	self_element.val(self_element.val().substring(0, start) + "\t" + self_element.val().substring(self_element.get(0).selectionEnd));
			    	    	self_element.get(0).selectionStart = self_element.get(0).selectionEnd = start + 1;
		    	    	}else{
		    	    		//Update text content (tab. deletion)
		    	    		var val = self_element.val().substring(0,start);
		    	    		val += "\t";
		    	    		//count the number of tab. (\t) to add
		    	    		var count = selectedText.match(/\n/g).length;
		    	    		val += selectedText.replace(/\n/g,"\n\t");
		    	    		val += self_element.val().substring(end,self_element.val().length);
		    	    		self_element.val(val);
		    	    		//Selection position is updated
		    	    		self_element.get(0).selectionStart = start + 1;
		    	    		self_element.get(0).selectionEnd = end + count + 1;
		    	    	}
	    	    	}
	    	    	return false;
	    	    }
	    	});
	    }
}

