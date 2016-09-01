(function () {
  
  /**
   * Applies extra behaviors to element's prototype. If the prototype has its own
   * behaviors, concats extra ones.
   */
  Variant.applyBehaviors = function (cls, behaviors) {
    if (Object.prototype.toString.call(cls.behaviors) === '[object Array]') {
      cls.behaviors = cls.behaviors.concat(behaviors);
    } else {
      cls.behaviors = behaviors;
    }
  };
  
  /**
   * Applies non Polymer properties that's defined on element's prototype
   * to the properties property.
   * 
   * For example:
   * 
   *   Variant.Example({
   *     is: 'my-example',
   *     variantProp: 'This is not Polymer property.'
   *   });
   * 
   * The prototype is transformed as below:
   * 
   *   Polymer({
   *     is: 'my-example',
   *     properties: {
   *       variantProp: {
   *         value: 'This is not Polymer property'
   *       }
   *     }
   *   });
   * 
   * If you want to add more several features to the propery, follow Polymer
   * property definition.
   */
  Variant.applyProps = function (cls, props) {
    Object.getOwnPropertyNames(cls).forEach(function (prop) {
      // Check if non Polymer property can be transformed.
      if (props.indexOf(prop) !== -1) {
        if (!cls.properties) {
          cls.properties = {};
        }
        if (!cls.properties[prop]) {
          cls.properties[prop] = {};
        }
        // It transforms only for value currently. We'll support to apply additional
        // feature for properties.
        cls.properties[prop].value = cls[prop];
      }
    });
  };
  
}());