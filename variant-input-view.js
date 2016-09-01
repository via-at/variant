(function () {
  
  Variant.InputViewBehavior = [
    Polymer.PaperInputBehavior,
    Polymer.IronValidatableBehavior,
    Polymer.IronFormElementBehavior
  ];
  
  /**
   * Extends Variant.View. This wrapper makes an element validatable input element.
   * The element will be recognized as a part of iron-form.
   */
  Variant.InputView = function (cls) {
    Variant.applyBehaviors(cls, Variant.InputViewBehavior);
    // The super class is Variant.View.
    Variant.View(cls);
  };
  
}());
