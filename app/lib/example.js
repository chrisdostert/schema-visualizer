(function ($) {
    //initialize JSV when the pagecontainer is ready
    $('body').one('pagecontainershow', function (event, ui) {

        JSV.init({
            schema: 'http://opspec.io/spec/0.1.2/schema/bundle-manifest.json'
        }, function () {
            //display schema version
            JSV.setVersion(tv4.getSchema(JSV.treeData.schema).version);
            //handle permalink
            if (window.jsvInitPath) {
                var node = JSV.expandNodePath(window.jsvInitPath.split('-'));

                JSV.flashNode(node);
                JSV.clickTitle(node);
            } else {
                JSV.resetViewer();
            }
        });
    });
})(jQuery);
