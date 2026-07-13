import MarkdownIt from "markdown-it";
import { parse } from "yaml";

const markdown = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: false,
});

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => parse(contents));

  eleventyConfig.addFilter("markdownBlock", (value = "") =>
    markdown.render(String(value)),
  );
  eleventyConfig.addFilter("markdownInline", (value = "") =>
    markdown.renderInline(String(value)),
  );

  eleventyConfig.addPassthroughCopy({
    "src/styles/resume.css": "resume.css",
  });
  eleventyConfig.addPassthroughCopy({
    "src/public": "public",
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      output: "dist",
    },
    templateFormats: ["njk"],
  };
}
