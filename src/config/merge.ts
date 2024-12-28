/* 
The merge function accepts source and target objects and copies the properties 
defined by the source object to the target,overriding the existing values.
*/

export const merge = (target: any, source: any): any => {
  Object.keys(source).forEach((key) => {
    if (typeof source[key] === "object" && !Array.isArray(source[key]))
      if (Object.hasOwn(target, key))
        // Si es un objeto, pero no un array
        merge(
          target[key],
          source[key]
        ); // Llamada recursiva dentro de un objeto
      else Object.assign(target, source[key]);
    else target[key] = source[key];
  });
};
