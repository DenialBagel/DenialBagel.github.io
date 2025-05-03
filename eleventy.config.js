/**
 *
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 */
export default async function (eleventyConfig){
  eleventyConfig.addPassthroughCopy('assets/foto')
  eleventyConfig.addPassthroughCopy('assets/style')

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}