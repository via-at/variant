(function () {

  var propNames = ['restricted'];

  /**
   * Extends Variant.View. It wraps optimal behaviors for a page view.
   */
  Variant.Page = function (cls) {
    
    Variant.applyBehaviors(cls, [
      Polymer.IronResizableBehavior,
      VA.RedirectBehavior
    ]);

    Variant.applyProps(cls, propNames);
    
    Variant.View(cls);
  }
  
}());
