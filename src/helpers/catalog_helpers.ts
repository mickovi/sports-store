import Handlebars, { HelperOptions } from "handlebars";
import { stringify } from "querystring";
import { escape } from "querystring";

/* 
- The HelperOptions.hash property is used to receive data in name/value 
pairs and is a useful way to provide structured data to a helper.
- The HelperOptions.data property provides access to context data, 
and its root property contains the data from the template that 
invoked the helper. 
*/

const getData = (options: HelperOptions) => {
  return { ...options.data.root, ...options.hash };
};

export const navigationUrl = (options: HelperOptions) => {
  const { page, pageSize, category, searchTerm } = getData(options);
  return "/?" + stringify({ page, pageSize, category, searchTerm });
};

/* escapeUrl encodes a value so that it can be included in a query string. */
export const escapeUrl = (url: string) => escape(url);

/* pageButtons generates content using the elements contained between the helper tags. */
export const pageButtons = (options: HelperOptions) => {
  const { page, pageCount } = getData(options);
  let output = "";
  for (let i = 1; i <= pageCount; i++) {
    output += options.fn({ page, pageCount, index: i, selected: i === page });
  }
  return output;
};

export const pageSizeOptions = (options: HelperOptions) => {
  const { pageSize } = getData(options);
  let output = "";
  [3, 6, 9].forEach((size) => {
    output += options.fn({
      size,
      selected: pageSize === size ? "selected" : "",
    });
  });
  console.log(output);
  return output;
};

export const categoryButtons = (options: HelperOptions) => {
  const { category, categories } = getData(options);
  let output = "";
  for (let i = 0; i < categories.length; i++) {
    output += options.fn({
      id: categories[i].id,
      name: categories[i].name,
      selected: category === categories[i].id,
    });
  }
  return output;
};

export const highlight = (value: string, options: HelperOptions) => {
  const { searchTerm } = getData(options);
  if (searchTerm && searchTerm !== "") {
    const regexp = new RegExp(searchTerm, "ig");
    const mod = value.replaceAll(regexp, "<strong>$&</strong>");
    return new Handlebars.SafeString(mod);
  }
  return value;
};

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

export const currency = (value: number) => {
  return formatter.format(value);
};
