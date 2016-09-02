/**
 */
(function () {
  
  /**
   * Variant.Model acceps the following properties.
   * 
   *   `path`: Describe request pathname. (Required)
   *   `relationships`: Describe model relationships.
   *   `parents`: Describe model parents.
   * 
   * See the description of Variant.Model to know how to use above properties.
   */
  var propNames = ['path', 'relationships', 'parents'];
  
  /**
   * Wraps the model behavior that makes an element model. The behavior is based on
   * firebase-database-behavior. But we consider the base behavior should not depend
   * only one specific platform, so we'll change the specification.
   * 
   * A model is defined as below:
   * 
   *   Variant.Model({
   *     is: 'my-user-model',
   *     path: '/users',
   *     relationships: {
   *       'my-group-model': 'groups'
   *     }
   *   });
   * 
   * See https://github.com/via-at/va-model/va-model-behavior to know more info.
   */
  Variant.Model = function (cls) {
    Variant.applyBehaviors(cls, [
      VA.ModelBehavior
    ]);
    Variant.applyProps(cls, propNames);
    Polymer(cls);
  };
  
}());
