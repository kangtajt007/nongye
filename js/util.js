/**
 * 等值线图设置
 */
function contourLine(){
        BootstrapDialog.show({
            title: "等值线图设置",
            url:'contourLine.html',
            closable:false,
            size:'size-wide',
            buttons: [{
                id: 'btn-ok',
                label: '确定',
                cssClass: 'btn btn-sm btn-corner btn-info fa fa-save',
                autospin: false,
                action: function(dialogRef){
                    outputContourLineImage();
                    dialogRef.close();
                }
            },
                {
                    id: 'btn-cancel',
                    label: '取消',
                    cssClass: 'btn btn-sm btn-corner btn-default fa fa-undo',
                    autospin: false,
                    action: function(dialogRef){
                        dialogRef.close();
                    }
                }]
        });
    }
/**
 * 等值线图
 */
    function outputContourLineImage(){
        BootstrapDialog.show({
            title: "等值线图",
            url:'contourLineImage.html',
            closable:false,
            size:'size-wide',
            buttons: [{
                id: 'btn-ok',
                label: '保存',
                cssClass: 'btn btn-sm btn-corner btn-info fa fa-save',
                autospin: false,
                action: function(dialogRef){
                    dialogRef.close();
                }
            },
                {
                    id: 'btn-cancel',
                    label: '关闭',
                    cssClass: 'btn btn-sm btn-corner btn-default fa fa-undo',
                    autospin: false,
                    action: function(dialogRef){
                        dialogRef.close();
                    }
                }]
        });
    }
    
    function siteSelect (){
    	BootstrapDialog.show({
        title: "站点选择",
        message: $("#siteSelect-container").clone().removeClass("hidden").show(),
        closable:false,
        height:'425',
        size:'size-wide',
        buttons: [{
            id: 'btn-ok',
            label: '全选',
            cssClass: 'btn btn-sm btn-corner btn-info fa fa-check-square',
            autospin: false,
            action: function(dialogRef){
            	$('[name="switch-field-siteSelect"]').each(function () {
            		if(!$(this).is(":disabled")){
            			$(this).prop("checked", true);
            		}
            	});
              
            }
        },{
            id: 'btn-ok',
            label: '清空',
            cssClass: 'btn btn-sm btn-corner btn-info fa fa-times',
            autospin: false,
            action: function(dialogRef){
            	$('[name="switch-field-siteSelect"]').each(function () {
            		if(!$(this).is(":disabled")){
            			$(this).prop("checked", false);
            		}
            	});
            	
            }
        },{
            id: 'btn-ok',
            label: '反选',
            cssClass: 'btn btn-sm btn-corner btn-info fa fa-check-square-o',
            autospin: false,
            action: function(dialogRef){
            	  $('[name="switch-field-siteSelect"]').each(function () { 
            			if(!$(this).is(":disabled")){
                      $(this).prop("checked", !$(this).prop("checked"));  
                      }
                  });   
            }
        },
        {
            id: 'btn-ok',
            label: '确定',
            cssClass: 'btn btn-sm btn-corner btn-warning fa fa-save',
            autospin: false,
            action: function(dialogRef){

                dialogRef.close();
            }
        },
        {
            id: 'btn-cancel',
            label: '取消',
            cssClass: 'btn btn-sm btn-corner btn-default fa fa-undo',
            autospin: false,
            action: function(dialogRef){
                dialogRef.close();
            }
        }]
    });
    }