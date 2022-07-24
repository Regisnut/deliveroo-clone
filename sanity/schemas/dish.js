export default {
  name: "thedish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "description",
      type: "string",
      title: "Normal description",
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",
    },
  ],
};
