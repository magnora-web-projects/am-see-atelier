export const course = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
    { name: "contactEmail", title: "Contact Email", type: "string" },
    { name: "submitButtonText", title: "Submit Button Text", type: "string" },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "organisation",
      title: "Organisation",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "termins",
      title: "Termins",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stepNumber", title: "Step Number", type: "number" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    {
      name: "formFields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "label", title: "Label", type: "string" },
            {
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["text", "email", "number"] },
            },
            { name: "isRequired", title: "Is Required", type: "boolean" },
          ],
        },
      ],
    },
  ],
};
