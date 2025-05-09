const {DateTime} = require("luxon");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy("src/style");
    eleventyConfig.addPassthroughCopy("src/foto");
    
    eleventyConfig.addFilter("postDate", (dateObj) =>
        {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);})
    return{
        dir:{
            input:"src",
          
        },
        templateFormats: ["md", "njk", "html"],
    
        // This is where the magic happens - we're telling Eleventy which directories to process
        pathPrefix: "/",
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk" };
}