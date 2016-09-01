(function () {
  
  var behaviors = [
    Polymer.NeonAnimatableBehavior,
    Polymer.IronResizableBehavior,
    VA.RedirectBehavior
  ];
  
  /**
   * Extends Variant.View. It wraps optimal behaviors for a page view.
   */
  Variant.Page = function (cls) {
    Variant.applyBehaviors(cls, behaviors);
    Variant.View(cls);
  }
  
}());
