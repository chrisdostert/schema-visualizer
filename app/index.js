(($) => {
  //initialize JSV when the pagecontainer is ready
  $('body').one('pagecontainershow', (event, ui) => {

    JSV.init({
      schema: new URI().query(true)['schema']
    }, () => {
      //display schema version
      JSV.setVersion(tv4.getSchema(JSV.treeData.schema).version);
      //handle permalink
      if (window.jsvInitPath) {
        const node = JSV.expandNodePath(window.jsvInitPath.split('-'));

        JSV.flashNode(node);
        JSV.clickTitle(node);
      } else {
        JSV.resetViewer();
      }
    });
  });
})(jQuery);
