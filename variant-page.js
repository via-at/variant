(function () {
  
  /**
   * Extends Variant.View. It wraps optimal behaviors for a page view.
   */
  Variant.Page = function (cls) {
    
    Variant.applyBehaviors(cls, [
      Polymer.NeonAnimatableBehavior,
      Polymer.IronResizableBehavior,
      VA.RedirectBehavior
    ]);
    
    Variant.View(cls);
  }
  
}());
