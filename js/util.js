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