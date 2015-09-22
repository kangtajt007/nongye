/**
 * 等值线图设置
 */
function contourLine(){
    BootstrapDialog.show({
        title: "等值线图设置",
        url:'contourLine.html',
        closable:false,
        width:'740',
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
/**
 * 站点选择
 */
function siteSelect (){
    BootstrapDialog.show({
    title: "站点选择",
    url: 'siteSelect.html',
    closable:false,
    height:'320',
    buttons: [
        {
            id: 'btn-ok',
            label: '确定',
            cssClass: 'btn btn-sm btn-corner btn-info fa fa-save',
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
//replace icons with FontAwesome icons like above
function updatePagerIcons() {
    var replacement =
    {
        'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
        'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
        'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
        'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
    };
    $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
        var icon = $(this);
        var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

        if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
    })
}