import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addFilter("asArray", (value) => {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [value];
  });

  eleventyConfig.addFilter("readableDate", (value, format = "DDD") => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(format);
  });

  eleventyConfig.addFilter("htmlDateString", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addCollection("docs", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/docs/**/*.md").sort((a, b) => a.date - b.date);
  });

  return {
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    }
  };
}
