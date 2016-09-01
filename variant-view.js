(function () {
  
  Variant.ViewBehavior = [
    VA.LocalizeBehavior
  ];
  
  /**
   * Wraps the localize behavior that makes an element localizable. The behavior is
   * based on app-localize-behavior.
   */
  Variant.View = function (cls) {
    applyBehaviors(cls, Variant.ViewBehavior);
    Polymer(cls);
  };
  
}());