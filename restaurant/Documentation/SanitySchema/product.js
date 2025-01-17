
export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Product Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: "images",
        title: "Product Images",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
        validation: (Rule) => Rule.required().min(1),
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      },
      {
        name: "inStock",
        title: "In Stock",
        type: "boolean",
        initialValue: true,
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: new Date().toISOString(),
      },
    ],
  };
  
